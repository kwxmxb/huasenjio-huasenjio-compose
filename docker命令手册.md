# docker 手册

一个开源的应用容器引擎

## 文档资料

1. 官方文档：https://docs.docker.com/get-started/overview/；
1. 菜鸟教程：https://www.runoob.com/docker/docker-tutorial.html；

## 核心架构图

![eGiqh4Yurjyg9tc](https://s2.loli.net/2022/07/28/eGiqh4Yurjyg9tc.png)

![l8WiFfXMTUYCxDb](https://s2.loli.net/2022/07/31/l8WiFfXMTUYCxDb.png)

![STLp5HbO4YWjGdD](https://s2.loli.net/2022/07/31/STLp5HbO4YWjGdD.png)

## 概念解释

### 仓库

对比 github，存储可以上传拉取镜像，资源在国外，因此需要配置镜像源。

### 镜像

类似于软件模版，可以通过镜像创建容器，例如：redis 镜像 --> run --> redis01 容器，一个镜像可以创建多个容器，容器之间相互隔离。

### 容器

通过镜像创建，并且可以独立运行一个或一组应用，可以进行启动、重启、删除等操作。

## docker 命令

### 查看容器

1. docker ps，查看正在运行的容器；
2. docker ps -a， 查看全部容器；

### 删除容器

1. docker rm -f 容器 id， 强制删除容器；
2. docker rm 容器 id，删除已停止的容器；

### 启动容器

1. docker start 容器 id；
2. docker restart 容器 id；

### 停止容器

1. docker stop 容器 id；
2. docker kill 容器 id；

### 容器信息

docker inspact 容器 id

### 进入容器

docker exec -it 容器名 bash

### 工具安装

```bash
apt-get update
apt-get install vim
```

## docker-compose 命令

### 启动服务

docker-compose -f ./docker-compose.yml up -d

### 停止服务

docker-compose -f ./docker-compose.yml stop

### 删除服务

docker-compose -f ./docker-compose.yml down

### 服务日志

docker-compose logs 服务名

### 进入服务

docker-compose exec 服务名 sh

### 移除已停止服务

docker-compose rm -f 服务名

### 重启单个服务

docker-compose restart 服务名

### 重新构建容器

docker-compose build --no-cache

### 仅未启动的容器

docker-compose up -d --no-recreate --remove-orphans

### 启动并清理孤儿容器

docker-compose up -d --remove-orphans
