# 单例模式

单例

让 **类** 创建的对象，在系统中 **只有** 唯一的一个实例

1. 定义一个 类属性，初始值是 None，用于记录 单例对象的引用
2. 重写 `__new__` 方法
    - 如果 类属性 is None，调用父类方法分配空间，并在类属性中记录结果
    - 返回 类属性 中记录的 对象引用
```python
class MusicPlayer(object):

    # 记录第一个被创建对象的引用
    instance = None
    # 记录是否执行过初始化动作
    init_flag = False

    def __new__(cls, *args, **kwargs):

        # 1. 判断类属性是否是空对象
        if cls.instance is None:
            # 2. 调用父类的方法，为第一个对象分配空间
            cls.instance = super().__new__(cls)

        # 3. 返回类属性保存的对象引用
        return cls.instance

    def __init__(self):

        if not MusicPlayer.init_flag:
            print("初始化音乐播放器")

            MusicPlayer.init_flag = True
```
