# 异常
## 一、捕获异常
### 1.1 简单的捕获异常语法
```python
try:
    尝试执行的代码
except:
    出现错误的处理
```

- try 尝试，下方编写要尝试代码，不确定是否能够正常执行的代码
- except 如果不是，下方编写尝试失败的代码

### 1.2 错误类型捕获
在程序执行时，可能会遇到 不同类型的异常，并且需要 针对不同类型的异常，做出不同的响应，这个时候，就需要捕获错误类型了

```python
try:
    # 尝试执行的代码
    pass
except 错误类型1:
    # 针对错误类型1，对应的代码处理
    pass
except (错误类型2, 错误类型3):
    # 针对错误类型2 和 3，对应的代码处理
    pass
except Exception as result:
    print("未知错误 %s" % result)
```

当 Python 解释器 抛出异常 时，最后一行错误信息的第一个单词，就是错误类型

### 1.3 捕获未知错误
在开发时，要预判到所有可能出现的错误，还是有一定难度的

如果希望程序 无论出现任何错误，都不会因为 Python 解释器 抛出异常而被终止，可以再增加一个 except

```python
except Exception as result:
    print("未知错误 %s" % result)
```

### 1.4 异常捕获完整语法
在实际开发中，为了能够处理复杂的异常情况，完整的异常语法如下：

```python
try:
    # 尝试执行的代码
    pass
except 错误类型1:
    # 针对错误类型1，对应的代码处理
    pass
except 错误类型2:
    # 针对错误类型2，对应的代码处理
    pass
except (错误类型3, 错误类型4):
    # 针对错误类型3 和 4，对应的代码处理
    pass
except Exception as result:
    # 打印错误信息
    print(result)
else:
    # 没有异常才会执行的代码
    pass
finally:
    # 无论是否有异常，都会执行的代码
    print("无论是否有异常，都会执行的代码")
else 只有在没有异常时才会执行的代码
finally 无论是否有异常，都会执行的代码
```

## 二、异常的传递

异常的传递 —— 当 **函数/方法** 执行 出现异常，会 **将异常传递** 给 **函数/方法** 的 调用一方

如果 传递到主程序，仍然 没有异常处理，程序才会被终止
```python
def demo1():
    return int(input("请输入一个整数："))


def demo2():
    return demo1()

try:
    print(demo2())
except ValueError:
    print("请输入正确的整数")
except Exception as result:
    print("未知错误 %s" % result)
```

## 三、抛出异常

`Python`中提供了一个`Exception`异常类

在开发时，如果满足 特定业务需求时，希望 抛出异常，可以：
- 创建 一个 Exception 的 对象
- 使用 **`raise`** 关键字 抛出 异常对象

```python
def input_password():

    # 1. 提示用户输入密码
    pwd = input("请输入密码：")

    # 2. 判断密码长度，如果长度 >= 8，返回用户输入的密码
    if len(pwd) >= 8:
        return pwd

    # 3. 密码长度不够，需要抛出异常
    # 1> 创建异常对象 - 使用异常的错误信息字符串作为参数
    ex = Exception("密码长度不够")

    # 2> 抛出异常对象
    raise ex


try:
    user_pwd = input_password()
    print(user_pwd)
except Exception as result:
    print("发现错误：%s" % result)
```
