# 包（Package）
## 1 概念

包 是一个 **包含多个模块** 的 **特殊目录**

目录下有一个 特殊的文件 __init__.py

## 2 发布模块（知道）
如果希望自己开发的模块，分享 给其他人，可以按照以下步骤操作
### 2.1 制作发布压缩包步骤
#### 2.1.1 创建 setup.py
```python
# 创建setup.py 文件
from distutils.core import setup

setup(name="hm_message",  # 包名
      version="1.0",  # 版本
      description="itheima's 发送和接收消息模块",  # 描述信息
      long_description="完整的发送和接收消息模块",  # 完整描述信息
      author="itheima",  # 作者
      author_email="itheima@itheima.com",  # 作者邮箱
      url="www.itheima.com",  # 主页
      py_modules=["hm_message.send_message",
                  "hm_message.receive_message"])
```
> 有关字典参数的详细信息，可以参阅官方网站：https://docs.python.org/2/distutils/apiref.html

#### 2.1.2 构建模块
`$ python3 setup.py build`
#### 2.1.3 生成发布压缩包
`$ python3 setup.py sdist`

### 2.2 安装模块

`$ tar -zxvf hm_message-1.0.tar.gz `

`$ sudo python3 setup.py install`
### 3.3 卸载模块

直接从安装目录下，把安装模块的 目录 删除就可以

```shell 
$ cd /usr/local/lib/python3.5/dist-packages/
$ sudo rm -r hm_message*
```
## 3 pip 安装第三方模块
```shell
# 将模块安装到 Python 2.x 环境
$ sudo pip install pygame
$ sudo pip uninstall pygame

# 将模块安装到 Python 3.x 环境
$ sudo pip3 install pygame
$ sudo pip3 uninstall pygame
#在 Mac 下安装 iPython
$ sudo pip install ipython
#在 Linux 下安装 iPython
$ sudo apt install ipython
$ sudo apt install ipython3
```