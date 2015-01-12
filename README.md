# fig-101

This repository demonstrates basic usage of fig to run a nodejs web app and a redis server in distinct containers.

Motivation: [http://blog.docker.com/2014/08/getting-started-with-orchestration-using-fig/](http://blog.docker.com/2014/08/getting-started-with-orchestration-using-fig/)

## Requirements

* [Fig](http://www.fig.sh/install.html)

## Usage

```shell
$ fig up
```

Open up [http://DOCKER_HOST:5000](http://DOCKER_HOST:5000) in your brower