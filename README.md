# 花森门户

> 在线地址（首次加载请耐心等待）：http://n.huasen.cc/
>
> 码云仓库地址：https://gitee.com/HuaSenJioJio/huasenjio-compose
>
> Github仓库地址：https://github.com/huasenjio/huasenjio-compose

huasenjio 系列网站增添新作品，（huasenjio-compose）[官方仓库](https://github.com/huasenjio/huasenjio-compose)，基于 vue.js（2.6.11）、node.js、docker-compose、redis、mongodb、jenkins 组合构建的容器应用，原创正式开源！🎉🎉🎉



## 平台简介

目前门户由浏览器主页、博客系统、后台管理系统组成，后期陆续推出低代码编辑器、日历待办、协同流程图模块。浏览器主页收录资源网站，涵盖了日常生活、娱乐、学习、影视、考研、工作、科技、实用工具等领域。博客系统，定期分享实用教程、计算机知识、资源软件等文章，致力于提供高效上网冲浪环境的公益性平台！



## 界面功能预览

### 浏览器主页

浏览器主页收录实用的资源网站，支持用户自定义收录、右键换色、更换壁纸、极简模式、多引擎搜索、站内链接检索、多设备适配显示等功能，生活与工作必备神器！

(1) 站内链接检索 + 右键换色

![bwT5saFxQz2RYon](https://s2.loli.net/2022/11/12/bwT5saFxQz2RYon.png)

(2) 极简模式 + 搜索引擎切换

![xM3tNHzoKils7P5](https://s2.loli.net/2023/02/05/xM3tNHzoKils7P5.png)

(3) 管理自定义收录网站

![woaujxGCKnWt8PB](https://s2.loli.net/2023/02/05/woaujxGCKnWt8PB.png)

(4) 个性化皮肤定制

![Lj3gREk8dnxbIHZ](https://s2.loli.net/2023/02/05/Lj3gREk8dnxbIHZ.png)

(5) 手机端 + 平板端 + 多设备响应式适配

![amP73Q5ctpU9sf4](https://s2.loli.net/2023/02/07/amP73Q5ctpU9sf4.png)



### 博客系统

文章分享模块，定时更新学习路线、实用教程、资源书籍等，采用 markdown 语法展现，支持锚点定位目录。

(1) 博客首页

![W5NyJahVl2pM1mi](https://s2.loli.net/2023/02/05/W5NyJahVl2pM1mi.png)

(2) 文章阅读

![FBDAtSpqlM86Cuz](https://s2.loli.net/2023/02/05/FBDAtSpqlM86Cuz.png)



### 后台管理

门户后台管理系统，支持数据统计、宿主机状态实时监听、markdown 文章发布、订阅网链栏目管理、账户管理、黑名单管理、日志管理、文件管理、权限管理等功能，达到现有功能几乎全面覆盖管理。

(1) 首页

![8ZmCz5AlPfXYcLy](https://s2.loli.net/2023/02/08/8ZmCz5AlPfXYcLy.png)

(2) 文章发布

![Jv2lAmTXwPRBtx6](https://s2.loli.net/2023/02/05/Jv2lAmTXwPRBtx6.png)

(3) 订阅管理

![VxA8QkUmCW6aPdF](https://s2.loli.net/2023/02/05/VxA8QkUmCW6aPdF.png)

(4) 文件管理

![UdWPTGeXF4hyxza](https://s2.loli.net/2023/02/05/UdWPTGeXF4hyxza.png)



## 技术架构

客户端基于 Vue.js（2.6.x）、ElementUI、Tailwindcss、Axios 等技术开发的 Web 应用，服务端基于 Node.js、Mongodb、Redis、Express 开发的服务框架，使用 Nginx 作为代理服务器转发请求，选择 jenkins 实现 CI/CD，借助 docker 进行一键容器化部署。

![PuyTDEVxoYajkOn](https://s2.loli.net/2022/11/12/PuyTDEVxoYajkOn.png)



## 快速部署

### 测试环境

1. Centos 7.4；
2. 腾讯云服务器 1 核 2G（学生机）；



### 安装依赖

#### git

安装git版本管理工具，直接拉取源码到服务器，免去通过xfpt上传源码文件的繁琐过程。

1）安装 wandisco 仓库包

`yum install http://opensource.wandisco.com/centos/7/git/x86_64/wandisco-git-release-7-2.noarch.rpm`

2）安装 git 安装包

`yum -y install git`

3）验证版本

`git version`

#### docker

1）卸载旧版本

```javascript
yum remove -y docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-selinux \
  docker-engine-selinux \
  docker-engine
```

2）安装依赖工具包

```javascript
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

3）设置 yum 源

```javascript
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sudo yum makecache fast
```

4）安装 docker

```javascript
yum install -y docker-ce
```

5）启动 docker

```javascript
systemctl start docker.service
```

6）设置开机自启动

```javascript
systemctl enable docker.service
```

7）设置权限

```javascript
sudo chmod a+rw /var/run/docker.sock
```

8）查看版本

命令行执行`docker version`如下命令，输出有 Client 和 Server 服务，则说明运行正常。

![1PzjM5mTcHDUByW](https://s2.loli.net/2022/11/13/1PzjM5mTcHDUByW.png)

9）安装 vim 工具

如果系统没有自带 vim 编辑器，则使用如下命令进行安装。

```javascript
yum -y install vim*
```

10）添加镜像源配置文件

默认通过官方镜像源拉取，速度特别慢，并且容易卡死，所以需要替换镜像源，如果目录下不存在 daemon.json 配置文件，则新建配置文件命令如下：

```javascript
// 1.修改配置文件命令
vim /etc/docker/daemon.json
// 2.写入配置
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ],
  "ipv6":false
}
// 3.重载配置
sudo systemctl daemon-reload
// 4.重启 docker
sudo systemctl restart docker

```

#### docker-compose

安装docker-compose服务，负责对docker容器进行集群和快速编排。

1）下载资源

```javascript
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

2）设置权限

```javascript
sudo chmod +x /usr/local/bin/docker-compose
```

3）建立软连接

不建立软连接，可能无法使用docker-compose命令。

```javascript
ln - s /usr/local/bin/docker-compose/usr/bin/docker-compose
```

4）查看版本

```javascript
docker-compose --version
```



## 运行容器

通过上一步，我们已经安装好git、docker、docker-compose服务，接下来我们拉取源码，直接运行容器。

1）通过 git 拉取源码

```javascript
git clone https://github.com/huasenjio/huasenjio-compose.git
```

2）进入 huasenjio-compose 目录

```javascript
cd huasenjio-compose
```

4）运行容器

执行运行容器命令后，docker将自动拉取安装配置nginx、mongodb、redis、jenkins、后端服务，第一次会比较缓慢，请耐心等待，如果遇到卡死的情况，使用`ctrl + c`终止命令，然后重复执行运行容器命令即可。

```javascript
docker-compose -f docker-compose-open.yml up -d
```

5）访问网站的关键信息

```javascript
// 站点链接
前台官网：协议://ip/portal
后台管理：协议://ip/admin

// 默认信息
后台管理账号/密码：admin@qq.com/12345
Mongodb数据库用户/密码：root/Mongo12345*
Redis密码：Redis12345*
```



## 常见 QA

1）为什么容器运行失败？

运行容器时，请确保80、37017、7379、8080、3000、8181端口不被占用，如果不幸已经有服务占用端口，则需要修改`docker-compose-open.yml`中对应容器的端口后，重新执行运行容器命令。

2）运行成功，但是还是无法访问到站点？

如果服务正常启动，但是无法访问站点，需要检查一下服务器防火墙和安全组配置，是否限制80端口。

3）用户注册时，为什么邮箱验证码无法发送？

由于邮箱验证码功能依赖 nodemailer 库实现，需要部署之前修改`/huasenjio-compose/huasen-server/config.js`中的`QQ_MAIL`配置项，更改成自己的申请邮箱地址和 mtp 通行码。

4）mongodb数据库的存储位置？

工程采取容器化部署，已经配置目录映射，项目根目录下`huasen-mongo/volume`文件夹，就是数据库的数据文件夹。



## 帮助命令

### 容器

> huasenjio-compose 目录下的终端执行

1）停止容器并且删除镜像

```javascript
docker-compose down
```

2）重新构建镜像（不使用缓存）

```javascript
docker-compose build --no-cache
```

3）重启某个容器

```javascript
docker-compose restart 容器名（nginx|mongo|redis|server|jenkins）
```

4）停止容器并且删除镜像

```javascript
docker-compose down
```



### linux

1）防火墙操作

```javascript
开启防火墙：systemctl start firewalld
关闭防火墙：systemctl stop firewalld
查看防火墙：systemctl status firewalld
查看指定端口：firewall-cmd --query-port=8080/tcp
打开指定端口：firewall-cmd --add-port=8080/tcp --permanent
重载端口数据：firewall-cmd --reload
关闭指定端口：firewall-cmd --permanent --remove-port=8080/tcp
```

2）查看端口运行服务

```javascript
netstat -anp | grep 端口号
```



## 在线视频安装教程

1）通过docker-compose安装教程

https://www.bilibili.com/video/BV1G44y1Q7MV

2）通过宝塔面板安装教程

即将更新



## 开发者指南

### 目录结构

```javascript
├── huasen-mongo       // mongodb 数据库配置和数据
├── huasen-nginx       // nginx 配置
├── huasen-redis       // redis 配置和数据
└── huasen-server      // 后端服务
  ├── app.js     // 服务入口文件
  └──config.js   // 服务配置文件
├── huasen-store       // 静态文件仓库
├── huasen-jenkins     // jenkins 配置
├── docker-compose-open.yml // docker-compose 编排配置文件
└── huasen-frontend    // 前端界面源码
  ├── admin  // 后台管理界面源码
  ├── portal // 前台站点源码
  └── guide  // 个人引导页源码
```



### 本地调试

#### 前端

> /huasenjio-compose/huasen-frontend/portal 目录下终端执行

1）安装依赖

`npm install`

2）运行程序

`npm run server`

3）打包构建

`npm run build`

#### 后台管理

> /huasenjio-compose/huasen-frontend/admin 目录下终端执行

1）安装依赖

`npm install`

2）运行程序

`npm run server`

3）打包构建

`npm run build`

#### 容器启动

> 根目录下终端执行

1）构建容器

`docker-compose -f docker-compose-open.yml up -d`

#### 后台服务

> /huasenjio-compose/huasen-server 目录下终端执行

1）安装依赖

`npm install`

2）运行程序

`npm run dev`



## 联系我们

由于涉及知识面较广，文字讲解篇幅过大，可以关注我的 Bilibili 账号，后续更新视频教程，感兴趣的小伙伴可以添加站长微信 ，进入前端技术交流群！

企鹅 🐧：184820911

微信 😸：huasencc（站长邀请进入前端交流群）

邮箱 📮：[184820911@qq.com](184820911@qq.com)

哔哩哔哩：[花森酱 JioJio](https://space.bilibili.com/241546158)
