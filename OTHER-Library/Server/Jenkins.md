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
