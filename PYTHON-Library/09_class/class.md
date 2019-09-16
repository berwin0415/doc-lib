# 类

## 01 定义类
- 定义只包含方法的类
```python
class 类名:

        def 方法1(self, 参数列表):
            pass

        def 方法2(self, 参数列表):
            pass
```

## 02 self参数
- 在类封装的方法内部，self 就表示 当前调用方法的对象自己
- 调用方法时，不需要传递 self 参数
- 在方法内部，可以通过 self. 访问对象的属性，也可以通过 self. 调用其他的对象方法

## 03 基础重载方法

| 序号 | 方法名   | 类型 | 作用                                   |
| ---- | -------- | ---- | -------------------------------------- |
| 01   | `__new__`  | 方法 | 创建对象时，会被 自动 调用             |
| 02   | `__init__` | 方法 | 对象被初始化时，会被 自动 调用         |
| 03   | `__del__`  | 方法 | 对象被从内存中销毁前，会被 自动 调用   |
| 04   | `__str__`  | 方法 | 返回对象的描述信息，print 函数输出使用 |

### 3.1 `__new__`

使用 类名() 创建对象时，Python 的解释器 首先 会 调用 `__new__` 方法为对象 分配空间

`__new__`是一个 由 object 基类提供的 内置的静态方法，主要作用有两个：
1. 在内存中为对象 分配空间
2. 返回 对象的引用

**重写`__new__`方法** 一定要 `return super().__new__(cls)`

```python
class MusicPlayer(object):

    def __new__(cls, *args, **kwargs):
        return super().__new__(cls)
```

### 1 `__init__` (构造函数)

- 当使用 类名() 创建对象时，会 自动 执行以下操作：
    - 为对象在内存中 分配空间 —— 创建对象
    - 为对象的属性 设置初始值 —— 初始化方法(init)

```python
class Cat:

    def __init__(self):

        print("这是一个初始化方法")

        # 定义用 Cat 类创建的猫对象都有一个 name 的属性
        self.name = "Tom"

    def eat(self):
        print("%s 爱吃鱼" % self.name)

# 使用类名()创建对象的时候，会自动调用初始化方法 __init__

tom = Cat()

tom.eat()
```
### 2 `__del__` 

如果希望在对象被销毁前，再做一些事情，可以考虑一下 `__del__` 方法

```python
class Cat:

    def __init__(self, new_name):

        self.name = new_name

        print("%s 来了" % self.name)

    def __del__(self):

        print("%s 去了" % self.name)

# tom 是一个全局变量

tom = Cat("Tom")
print(tom.name)```
# del 关键字可以删除一个对象

del tom

print("-" * 50)
```

### 3 `__str__` 方法
- 在 Python 中，使用 print 输出 对象变量，默认情况下，会输出这个变量 引用的对象 是 由哪一个类创建的对象，以及 在内存中的地址（十六进制表示）
- 如果在开发中，希望使用 print 输出 对象变量 时，能够打印 自定义的内容，就可以利用 `__str__` 这个内置方法了

> 注意：`__str__`方法必须返回一个字符串

```python
class Cat:

    def __init__(self, new_name):

        self.name = new_name

        print("%s 来了" % self.name)

    def __del__(self):

        print("%s 去了" % self.name)

    def __str__(self):
        return "我是小猫：%s" % self.name

tom = Cat("Tom")
print(tom) # 我是小猫：Tom
```

## 04 私有属性和私有方法

**私有属性和私有方法** 是在对象的内部被使用，而 不希望在外部被访问到

### 定义方式

在定义属性或方法时，在属性名或者方法名前增加两个下划线
```python
class Women:

    def __init__(self, name):

        self.name = name
        # 不要问女生的年龄
        self.__age = 18

    def __secret(self):
        print("我的年龄是 %d" % self.__age)


xiaofang = Women("小芳")
# 私有属性，外部不能直接访问
# print(xiaofang.__age)

# 私有方法，外部不能直接调用
# xiaofang.__secret()
```

### 伪私有属性和私有方法（科普）
提示：在日常开发中，不要使用这种方式，访问对象的 私有属性 或 私有方法

Python 中，并没有 真正意义 的 私有

在给 属性、方法 命名时，实际是对 名称 做了一些特殊处理，使得外界无法访问到
处理方式：在 名称 前面加上 _类名 => _类名__名称

```python
# 私有属性，外部不能直接访问到
print(xiaofang._Women__age)

# 私有方法，外部不能直接调用
xiaofang._Women__secret()
```

### 父类的**私有属性**和**私有方法**

- 子类对象 不能 在自己的方法内部，直接 访问 父类的 私有属性 或 私有方法
- 子类对象 可以通过 父类 的 公有方法 间接 访问到 私有属性 或 私有方法
- 私有属性、方法 是对象的隐私，不对外公开，外界 以及 子类 都不能直接访问


## 05 继承

### 1 单继承

继承的概念：子类 拥有 父类 的所有 方法 和 属性

```python
class 类名(父类名):

    pass
```

#### 方法的重写

子类 继承自 父类，可以直接 享受 父类中已经封装好的方法，不需要再次开发
应用场景

当 父类 的方法实现不能满足子类需求时，可以对方法进行 重写(override)

1. 覆盖父类的方法
2. 对父类方法进行 扩展
    - 需要的位置使用 super().父类方法 来调用父类方法的执行


## 06 super
在 Python 中 super 是一个 特殊的类

super() 就是使用 super 类创建出来的对象

最常 使用的场景就是在 重写父类方法时，调用 在父类中封装的方法实现

### 调用父类方法的另外一种方式（知道）

在 Python 2.x 时，如果需要调用父类的方法，还可以使用以下方式：

`父类名.方法(self)`

这种方式，目前在 Python 3.x 还支持这种方式

这种方法 不推荐使用，因为一旦 父类发生变化，方法调用位置的 类名 同样需要修改
提示

## 07. 多继承

#### **概念**

子类可以拥有多个父类，并且具有所有父类的属性和方法

#### **语法**

```python
class 子类名(父类名1, 父类名2...)
    pass
```
### 7.1 多继承的使用注意事项

如果不同的父类中存在同名的方法，子类对象在调用方法时，会调用哪一个父类中的方法呢？

#### Python 中的 MRO —— 方法搜索顺序（知道）

MRO 是 method resolution order，主要用于在多继承时判断**方法、属性**的调用路径

Python 中针对**类**提供了一个 内置属性 __mro__ 可以查看 方法 搜索顺序

```python
print(C.__mro__)

(<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>)
```

在搜索方法时，是按照 __mro__ 的输出结果 从左至右 的顺序查找的

## 08 多态

**多态**
- 不同的**子类对象**调用相同的**父类方法**，产生不同的执行结果

```python
class Dog(object):

    def __init__(self, name):
        self.name = name

    def game(self):
        print("%s 蹦蹦跳跳的玩耍..." % self.name)


class XiaoTianDog(Dog):

    def game(self):
        print("%s 飞到天上去玩耍..." % self.name)


class Person(object):

    def __init__(self, name):
        self.name = name

    def game_with_dog(self, dog):

        print("%s 和 %s 快乐的玩耍..." % (self.name, dog.name))

        # 让狗玩耍
        dog.game()


# 1. 创建一个狗对象
# wangcai = Dog("旺财")
wangcai = XiaoTianDog("飞天旺财")

# 2. 创建一个小明对象
xiaoming = Person("小明")

# 3. 让小明调用和狗玩的方法
xiaoming.game_with_dog(wangcai)
```

## 09 类属性和类方法

### 9.1 类属性

在类对象中定义的属性称为类属性
```python
class example:
    count = 0
```

#### 9.1.1 属性的获取机制（科普）

在 Python 中 属性的获取 存在一个 向上查找机制

![img](../../PUBLIC-Repertory/images/python/019_通过对象访问类属性.png)


### 9.2 类方法和静态方法

#### 9.2.1 类方法

**类方法** 就是针对**类对象**定义的方法

在 类方法 内部可以直接访问 类属性 或者调用其他的 类方法

```python
@classmethod
def 类方法名(cls):
    pass
```

通过`cls`可以访问和和调用其他类方法

#### 9.2.2 静态方法
**静态方法**
- 既**不需要**访问**实例属性**或者调用**实例方法**
- 也**不需要**访问**类属性**或者调用**类方法**

```python
@staticmethod
def 静态方法名():
    pass
```

静态方法 需要用 修饰器 @staticmethod 来标识，告诉解释器这是一个静态方法
