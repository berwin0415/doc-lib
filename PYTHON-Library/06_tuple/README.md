# 元组

## 一、元组的定义

- `Tuple`（元组）与列表类似，不同之处在于元组的 **元素不能修改**

```python
info_tuple = ("zhangsan", 18, 1.75)

# 创建空元组
info_tuple = ()

# 元组中 **只包含一个元素** 时，需要 **在元素后面添加逗号**
info_tuple = (50, )
```

## 二、元组常用操作

- 在 `ipython3` 中定义一个 **元组**，例如：`info = ()`
- 输入 `info.` 按下 `TAB` 键，`ipython` 会提示 **元组** 能够使用的函数如下：

```python
info.count  info.index
```

> 有关 **元组** 的 **常用操作** 可以参照上图练习

## 三、循环遍历

```python
# for 循环内部使用的变量 in 元组
for item in info:

    循环内部针对元组元素进行操作
    print(item)

```

> - 在 `Python` 中，可以使用 `for` 循环遍历所有非数字型类型的变量：**列表**、**元组**、**字典** 以及 **字符串**
> - 提示：在实际开发中，除非 **能够确认元组中的数据类型**，否则针对元组的循环遍历需求并不是很多

## 四、应用场景

- 尽管可以使用 `for in` 遍历 **元组**
- 但是在开发中，更多的应用场景是：
  - **函数的 参数 和 返回值**，一个函数可以接收 **任意多个参数**，或者 **一次返回多个数据**
    - 有关 **函数的参数 和 返回值**，在后续 **函数高级** 给大家介绍
  - **格式字符串**，格式化字符串后面的 `()` 本质上就是一个元组
  - **让列表不可以被修改**，以保护数据安全

```python
info = ("zhangsan", 18)

print("%s 的年龄是 %d" % info)

```

#### 元组和列表之间的转换

- 使用 `list` 函数可以把元组转换成列表

```python
list(元组)
```

- 使用 `tuple` 函数可以把列表转换成元组

```python
tuple(列表)
```
