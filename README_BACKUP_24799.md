![Huginn](https://raw.github.com/cantino/huginn/master/media/huginn-logo.png "Your agents are standing by.")

-----

## What is Huginn?

Huginn is a system for building agents that perform automated tasks for you online.  They can read the web, watch for events, and take actions on your behalf.  Huginn's Agents create and consume events, propagating them along a directed graph.  Think of it as a hackable Yahoo! Pipes plus IFTTT on your own server.  You always know who has your data.  You do.

![the origin of the name](doc/imgs/the-name.png)

#### Here are some of the things that you can do with Huginn:

* Track the weather and get an email when it's going to rain (or snow) tomorrow ("Don't forget your umbrella!")
* List terms that you care about and receive emails when their occurrence on Twitter changes.  (For example, want to know when something interesting has happened in the world of Machine Learning?  Huginn will watch the term "machine learning" on Twitter and tell you when there is a spike in discussion.)
* Watch for air travel or shopping deals
* Follow your project names on Twitter and get updates when people mention them
* Scrape websites and receive emails when they change
* Connect to Adioso, HipChat, Basecamp, Growl, FTP, IMAP, Jabber, JIRA, MQTT, nextbus, Pushbullet, Pushover, RSS, Bash, Slack, StubHub, translation APIs, Twilio, Twitter, Wunderground, and Weibo, to name a few.
* Send digest emails with things that you care about at specific times during the day
* Track counts of high frequency events and send an SMS within moments when they spike, such as the term "san francisco emergency"
* Send and receive WebHooks
* Run custom JavaScript or CoffeeScript functions
* Track your location over time
* Create Amazon Mechanical Turk workflows as the inputs, or outputs, of agents (the Amazon Turk Agent is called the "HumanTaskAgent"). For example: "Once a day, ask 5 people for a funny cat photo; send the results to 5 more people to be rated; send the top-rated photo to 5 people for a funny caption; send to 5 final people to rate for funniest caption; finally, post the best captioned photo on my blog."

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cantino/huginn?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Join us in our [Gitter room](https://gitter.im/cantino/huginn) to discuss the project and follow [@tectonic](https://twitter.com/tectonic) for updates as Huginn evolves.

### Join us!

Want to help with Huginn?  All contributions are encouraged!  You could make UI improvements, [add new Agents](https://github.com/cantino/huginn/wiki/Creating-a-new-agent), write [documentation and tutorials](https://github.com/cantino/huginn/wiki), or try tackling [issues tagged with #help-wanted](https://github.com/cantino/huginn/issues?direction=desc&labels=help-wanted&page=1&sort=created&state=open).  Please fork, add specs, and send pull requests!

Really want a fix or feature? Want to solve some community issues and earn some extra coffee money? Take a look at the [current bounties on Bountysource](https://www.bountysource.com/trackers/282580-huginn).

Have an awesome idea but not feeling quite up to contributing yet? Head over to our [Official 'suggest an agent' thread ](https://github.com/cantino/huginn/issues/353) and tell us!

## Examples

Please checkout the [Huginn Introductory Screencast](http://vimeo.com/61976251)!

And now, some example screenshots.  Below them are instructions to get you started.

![Example list of agents](doc/imgs/your-agents.png)

![Event flow diagram](doc/imgs/diagram.png)

![Detecting peaks in Twitter](doc/imgs/peaks.png)

![Logging your location over time](doc/imgs/my-locations.png)

![Making a new agent](doc/imgs/new-agent.png)

## Getting Started

<<<<<<< 70453f33208bdd527f4974dabffedad242de7281
### Docker

The quickest and easiest way to check out Huginn is to use the offical Docker image. Have a look at the [documentation](./doc/docker/install.md).

### Local Installation
=======
### Running locally
>>>>>>> Adding `Run Project` button and deployment instructions to README.md

Click the button bellow to quickly and safely install this project on your local machine.

[![Run project](https://s3-sa-east-1.amazonaws.com/assets.azk.io/azk-button.png)](http://run-stage.azk.io/start/?repo=azk-button/huginn&ref=azkfile)

The `Run Project` button employs `azk`, a lightweight open source orchestration tool that will automatically isolate and configure the application's environment for you.

Learn more about `azk` [here](Azkfile.md).

Read the [wiki][wiki] for usage examples and to get started making new Agents.

### Develop

All agents have specs! Test all specs with `bundle exec rspec`, or test a specific spec with `bundle exec rspec path/to/specific/spec.rb`. Read more about rspec for rails [here](https://github.com/rspec/rspec-rails).

## Deployment

<<<<<<< 70453f33208bdd527f4974dabffedad242de7281
### Heroku

Try Huginn on Heroku: [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy) (Takes a few minutes to setup. Read the [documentation](./doc/heroku/install.md) while you are waiting and be sure to click 'View it' after launch!)
=======
### Deploying to DigitalOcean

After you run this project locally using [`Run Project` button](#running-locally), deploying to [DigitalOcean](http://digitalocean.com/) is very simple.

First, be sure you have SSH keys configured in your machine. If you don't have it yet (or if you aren't sure about it), just follow steps 1 and 2 of [this tutorial](https://help.github.com/articles/generating-ssh-keys/).

Next, put your [personal access token](https://cloud.digitalocean.com/settings/applications) into a `.env` file:

```bash
$ cd path/to/the/project
$ echo "DEPLOY_API_TOKEN=<YOUR-PERSONAL-ACCESS-TOKEN>" >> .env
```

Then, just run the following:

```bash
$ azk shell deploy
```

The `Run Project` button employs `azk`, a lightweight open source orchestration tool that will automatically isolate and configure the application's environment for you.

Find further instructions on how to deploy to DigitalOcean using `azk` [here](http://docs.azk.io/en/deploy/README.html).

### Deploying to Heroku

Try Huginn on Heroku: [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy) (Takes a few minutes to setup.  Be sure to click 'View it' after launch!)
>>>>>>> Adding `Run Project` button and deployment instructions to README.md

Huginn works on the free version of Heroku [with significant limitations](https://github.com/cantino/huginn/blob/master/doc/heroku/install.md). For non-experimental use, we strongly recommend Heroku's cheapest paid plan or our Docker container.

Please see [the Huginn Wiki](https://github.com/cantino/huginn/wiki#deploying-huginn) for detailed deployment strategies for different providers.

### Manual installation on any server

Have a look at the [installation guide](./doc/manual/README.md).

### Optional Setup

#### Setup for private development

See [private development instructions](https://github.com/cantino/huginn/wiki/Private-development-instructions) on the wiki.

#### Enable the WeatherAgent

In order to use the WeatherAgent you need an [API key with Wunderground](http://www.wunderground.com/weather/api/). Signup for one and then change the value of `api_key: your-key` in your seeded WeatherAgent.

#### Disable SSL

We assume your deployment will run over SSL. This is a very good idea! However, if you wish to turn this off, you'll probably need to edit `config/initializers/devise.rb` and modify the line containing `config.rememberable_options = { :secure => true }`.  You will also need to edit `config/environments/production.rb` and modify the value of `config.force_ssl`.

## License

Huginn is provided under the MIT License.

[![Build Status](https://travis-ci.org/cantino/huginn.png)](https://travis-ci.org/cantino/huginn) [![Coverage Status](https://coveralls.io/repos/cantino/huginn/badge.png)](https://coveralls.io/r/cantino/huginn) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/cantino/huginn/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Dependency Status](https://gemnasium.com/cantino/huginn.svg)](https://gemnasium.com/cantino/huginn) [![Bountysource](https://www.bountysource.com/badge/tracker?tracker_id=282580)](https://www.bountysource.com/trackers/282580-huginn?utm_source=282580&utm_medium=shield&utm_campaign=TRACKER_BADGE)

