# Jenkins

## Jenkins 是什么?

Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。

Jenkins 支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。


## 一、安装

安装环境： CentOS 7.4 x64

### 1. 安装Java JDK

```shell
yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel
```

### 2. 安装Jenkins

```shell
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key

yum install jenkins
```

## 二、配置Jenkins

### 1. 启动

```shell
service jenkins start

netstat -tunlp |grep :8080
```

至此已经在8080端口启动了jenkins的安装服务，在页面完成剩余安装

### 2. 获取初始化密码

打开页面后，会要求输入jenkins的初始化密码

键入如下命令获取密码，并键入页面

```shell
cat /var/lib/jenkins/secrets/initialAdminPassword
```

### 3. 完成安装

初始化安装时选择推荐插件即可

安装完插件后设置默认用户账号密码

### 4. 配置

为Jenkins配置sudo权限

```shell
vim /etc/sudoers

# 在最后添加
jenkins ALL=(ALL) NOPASSWD:ALL
```

## 三、配置webhooks

配置前要求：

1.Jenkins已经安装Github插件

2.Jenkins服务器已经拥有一个公网IP地址

### 第一步：配置Jenkins全局

尽管Jenkins已经配置与Github代码库进行通信，但我们需从Jenkins手动启动构建，如需启动自动构建，Jenkins需要在Hook URL中监听Github的Post请求，才会进行自动构建

要获取Jenkins的Hook URL，打开Jenkins首页控制台--》系统管理 => 系统配置

在Github插件的配置中，点击“高级”按钮

启用 **覆盖 Hook URL**

将url复制出来，添加进github项目setting设置中的webhook配置中


