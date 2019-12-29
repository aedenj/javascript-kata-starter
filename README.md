## Javascript Kata Starter

A starting point for a kata in Javascript

### Prerequisites

1. Docker

    + [Windows](https://docs.docker.com/docker-for-windows/install/)
    + [Mac](https://download.docker.com/mac/stable/Docker.dmg)

### Up & Running

One way to get started,

```
git clone git@github.com:aedenj/javascript-kata-starter.git ~/projects/katas/hard-problem
cd ~/projects/katas/hard-problem;docker-compose run tests sh -c "npm run setup"
```

The `npm run setup` command with remove the git directory, run npm install and start the tests

From there follow the usual TDD process of red, green and refactor.

If you stop the container for some reason and what to restart the tests only run,

```
docker-compose run tests sh -c "npm test"
```

Lastly, if you simply want a repl for experimenting while you're doing a kata, you can run

```
docker run -it --rm node:latest node
```
