# CentOS7安装git

## 1. 查看当前是否已安装git

```shell
git --version

# 若存在 先移除
yum remove git
```

## 2. 查看最新版本并安装

前往[git官网](https://github.com/git/git/releases)查询

下载

```shell
wget https://Github.com/Git/Git/archive/v2.11.0.tar.gz
```

解压

```shell
tar -zxvf v2.11.0.tar.gz
```

安装依赖插件(如已安装请忽略)

```shell
yum install autoconf automake libtool zlib zlib-devel
```

安装

```shell
cd git-2.11.0

make configure

./configure --prefix=/usr/local/git --with-iconv --with-curl --with-expat=/usr/local/lib

make && make install
```

添加环境变量

```shell
echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/bashrc

source /etc/bashrc
```

安装完成，可使用git --version 查看是否安装成功
