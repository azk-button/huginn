/* globals systems path sync persistent */
/* eslint camelcase: [2, {properties: "never"}] */
/* eslint comma-dangle: [0, {properties: "never"}] */

/* see Azkfile.md */
systems({

  //////////
  /// production version
  //////////
  "huginn-prod": {
    depends: ["mysql"],
    image: {"docker": "azukiapp/ruby:2.1"},
    provision: [
      "[ -e .env ] || cp .env.example .env",
      "bundle install --path /azk/bundler --without development test",
      "bundle exec rake db:create",
      "bundle exec rake db:migrate",
      "bundle exec rake db:seed",
      "bundle exec rake assets:precompile"
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",

    command: "bundle exec rails server -p $HTTP_PORT -P /tmp/ruby.pid -b 0.0.0.0",
    wait: {retry: 60, timeout: 1000},
    mounts: {
      "/azk/#{manifest.dir}": sync("."),
      "/azk/bundler": persistent("#{manifest.dir}/bundler"),
      "/azk/#{manifest.dir}/tmp": persistent("#{manifest.dir}/tmp"),
      "/azk/#{manifest.dir}/log": path("#{manifest.dir}/log"),
      "/azk/#{manifest.dir}/.bundle": path("#{manifest.dir}/.bundle"),
    },
    scalable: {"default": 1},
    http: {
      domains: [
        "#{system.name}.#{azk.default_domain}", // default azk
        "#{process.env.AZK_HOST_IP}"            // used if deployed
      ]
    },
    ports: {
      http: "3000/tcp",
    },
    envs: {
      RAILS_ENV: "production",
      ON_HEROKU: "true",
      RAILS_SERVE_STATIC_FILES: "true",
      BUNDLE_APP_CONFIG: "/azk/bundler",
      DOMAIN: "#{system.name}.#{azk.default_domain}",
      PORT: "3000"
    },
  },

  "huginn-worker": {
    extends: "huginn-prod",
    scalable: { default: 1, limit: 1 },
    http: null,
    ports: null,
    wait: undefined,
    command: "bundle exec rails runner bin/threaded.rb -E production",
  },

  mysql: {
    depends: [],
    image: {"docker": "azukiapp/mysql:5.6"},
    shell: "/bin/bash",
    wait: 25,
    mounts: {
      "/var/lib/mysql": persistent("#{manifest.dir}/mysql"),
    },
    ports: {
      data: "3306/tcp",
    },
    envs: {
      MYSQL_ROOT_PASSWORD: "mysecretpassword",
      MYSQL_USER: "azk",
      MYSQL_PASS: "azk",
      MYSQL_DATABASE: "#{manifest.dir}_development",
    },
    export_envs: {
      // check this gist to configure your database
      // https://gist.github.com/gullitmiranda/62082f2e47c364ef9617
      DATABASE_URL: "mysql2://#{envs.MYSQL_USER}:#{envs.MYSQL_PASS}@#{net.host}:#{net.port.data}/${envs.MYSQL_DATABASE}",
    },
  },

  //////////
  /// development version
  //////////
  "huginn-dev": {
    extends: "huginn-prod",
    depends: ['mysql'],
    provision: [
      "[ -e .env ] || cp .env.example .env",
      "bundle install --path /azk/bundler",
      "bundle exec rake db:create",
      "bundle exec rake db:migrate",
      "bundle exec rake db:seed"
    ],
    command: "bundle exec rails server -p $HTTP_PORT -P /tmp/ruby.pid -b 0.0.0.0",
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    scalable: { default: 0, limit: 1 },
    envs: {
      RAILS_ENV: "development",
      BUNDLE_APP_CONFIG: "/azk/bundler",
      DOMAIN: "#{system.name}.#{azk.default_domain}",
      PORT: "3000"
    },
  },

  "huginn-dev-worker": {
    extends: "huginn-dev",
    scalable: { default: 0, limit: 1 },
    http: null,
    ports: null,
    wait: undefined,
    command: "bundle exec rails runner bin/threaded.rb",
  },


  //////////
  /// deploy systems
  //////////
  deploy: {
    image: {"docker": "azukiapp/deploy-digitalocean"},
    mounts: {

      // your files on remote machine
      // will be on /home/git folder
      "/azk/deploy/src":  path("."),

      // will use your public key on server
      // that way you can connect with:
      // $ ssh git@REMOTE.IP
      // $ bash
      "/azk/deploy/.ssh": path("#{process.env.HOME}/.ssh")
    },

    // this is not a server
    // just call with azk shell deploy
    scalable: {"default": 0, "limit": 0},

    envs: {

      // need this big because we have to build nokogiri
      BOX_SIZE: '2gb',

      GIT_CHECKOUT_COMMIT_BRANCH_TAG: 'azkfile',
      AZK_RESTART_COMMAND: 'azk restart huginn-worker -Rvv && azk restart huginn-prod -Rvv',
      RUN_SETUP: 'true',
      RUN_CONFIGURE: 'true',
      RUN_DEPLOY: 'true',
    }
  },
  "fast-deploy": {
    extends: 'deploy',
    envs: {
      BOX_SIZE: '2gb',
      GIT_CHECKOUT_COMMIT_BRANCH_TAG: 'azkfile',
      AZK_RESTART_COMMAND: 'azk restart huginn-worker -Rvv && azk restart huginn-prod -Rvv',
      RUN_SETUP: 'false',
      RUN_CONFIGURE: 'false',
      RUN_DEPLOY: 'true',
    }
  },

});
