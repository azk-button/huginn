# Huginn :: Azkfile.js

## Systems

### Production

#### 1) huginn-prod

- huginn production web site

#### 2) huginn-worker

- huginn production worker

#### 3) mysql

- database

------------

### Development

#### 4) huginn-dev

- huginn development web site

#### 5) huginn-dev-worker

- huginn development worker

------------

### Deploy

#### 6) deploy

- full deploy on Digital Ocean

#### 7) fast-deploy

- fast deploy changes on Digital Ocean

--------------------

## Start azk

#### [Install azk](http://docs.azk.io/en/installation/README.html)

```sh
# easy install
curl -Ls http://azk.io/install.sh | bash
```

#### start production version

```sh
# easy start
azk start
```

#### start development version

```sh
# start and open URL
azk start -R huginn-dev-worker && azk start -R huginn-dev -o
```

#### deploy production to Digital Ocean

We are using this system to deploy: https://github.com/azukiapp/docker-deploy-digitalocean

```sh
azk shell deploy
```

--------------------

### Other azk commands

#### stop all containers

```sh
$ azk stop
```

#### restart all container

```sh
$ azk restart
```

#### restart and reprovision all container

```sh
$ azk restart -Rvv
```

#### check logs

```sh
$ azk logs
```

#### info on containers

```sh
$ azk info
```

--------------------

### more on azk

- Official Site
  http://azk.io
- Github
  https://github.com/azukiapp/azk
- Documentation
  http://docs.azk.io
- Images directory created by the azk team
  http://images.azk.io

### Contribute to azk

- Star azk on Github
  https://github.com/azukiapp/azk
- Report an issue
  https://github.com/azukiapp/azk/issues/new
- Help solving a reported issue
  https://github.com/azukiapp/azk/issues
- Check out our awesome sponsors
  http://azk.io/#sponsors

### Stay in touch with the azk team

- Sign up the weekly digest
  http://www.azk.io/#newsletter
- Follow the blog
  https://medium.com/azuki-news
- Talk to our support (chat)
  https://gitter.im/azukiapp/azk (English) e https://gitter.im/azukiapp/azk/pt (Português)
- Facebook
  https://www.facebook.com/azukiapp
- Twitter
  http://twitter.com/azukiapp
