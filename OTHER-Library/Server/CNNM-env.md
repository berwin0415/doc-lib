# 配置CentOS+Ngnix+Nodejs+Mysql环境

## 前言

nodeJs是一条打通前后端的捷径，网上的配置教程又比较分散，所以就重新统一组织了一下。

## 一、环境

- 阿里云主机 CentOS 7.6 x64

## 二、Nginx

### 1. 安装Nginx源

```shell
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

安装该rpm后，我们就能在/etc/yum.repos.d/ 目录中看到一个名为nginx.repo 的文件。


### 2. 安装Nginx

安装完Nginx源后，就可以正式安装Nginx了。

```shell
yum install -y nginx
```

### 3. 配置Nginx

打开配置文件

```shell
sudo vim /etc/nginx/conf.d/default.conf
```

配置

```conf
server {
    listen       80;

# 如果要支持HTTPS，修改这里
# 可以使用 https://letsencrypt.org 的免费SSL证书
    #listen 443 ssl;
    #ssl_certificate     www.example.com.crt;
    #ssl_certificate_key www.example.com.key;
    #ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    #ssl_ciphers         HIGH:!aNULL:!MD5;

# 重定向所有HTTP到HTTPS
    # rewrite ^(.*)$ https://$host$1 permanent;

# 绑定域名
    server_name ~^(.+)?\.example\.com$;

# 当访问一级域名时重定向至www
    if ($host = example.com){
        rewrite ^ http://www.example.com permanent;
    }
# 网站根目录，根据需要修改
    location / {
        root   /root/wwwsite/example.com/$1/;
        index  index.html index.htm;
    }

    error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

站点的目录结构应该如下：

- /root/wwwsite/example.com/www/
- /root/wwwsite/example.com/nginx/

#### 碰到的问题

- 配置完成后访问仍显示403
    - /etc/nginx/nginx.conf中第一行user后改为nginx

### 常用命令

- 启动
    - nginx
- 测试Nginx配置是否正确
    - nginx -t
- 优雅重启
    - nginx -s reload
- nginx服务停止
    - nginx -s stop

## 三、node

### 1. 安装nvm版本管理器

通过nvm, 可以很方便的管理node版本

```shell
# 第一步
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# 第二步
command -v nvm
# 第三步
重新连接服务器
```

### 2. 安装node

安装最新版本node

```shell
nvm install node
```

检查是否安装成功

```shell
node -v
npm -v
```

## 三、mysql

### 1. 安装mysql

```shell
# 第一步：下载并安装MySQL官方的Yum Repository

wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm

# 第二步：使用上面的命令直接安装Yum Repository

yum -y install mysql57-community-release-el7-10.noarch.rpm

# 第三步：安装MySQL服务器

yum -y install mysql-community-server
```

### 2. 启动并设置MySQL数据库

```shell
# 1. 启动MySQL

systemctl start  mysqld.service

# 2. 查看MySQL运行状态

systemctl status mysqld.service

# 3. 此时MySQL已经开始正常运行，需要找出root的密码

grep "password" /var/log/mysqld.log

# 4. 如下命令登录mysql

mysql -uroot -p
# 输入初始密码，此时不能做任何事情，因为MYSQL默认必须修改密码才能正常使用

# 5. 修改初始密码，默认状态下mysql对密码的要求较高，因此需要先修改安全等级

set global validate_password_policy=0;
set global validate_password_length=4;
set password for root@localhost = password('新密码');

# 6. 卸载一开始安装的Yum Repository

yum -y remove mysql57-community-release-el7-10.noarch

# 7. 允许任何远程主机连接mysql，记得替换password;如果是固定ip的主机也可以将’%‘换成ip地址来仅允许某一主机登录

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
# 再刷新权限
flush privileges;

# 8. 退出后重启服务

service mysqld restart

# 9. 需要取消权限

Delete from user where user = "user_name" and host = "host_name" ;

```

## All Down
