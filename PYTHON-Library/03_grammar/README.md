# python 语法

## 目录

- [1.条件语句](./conditional_statement.md)
- [2.逻辑运算](./logical_operation.md)
- [3.while 语句](./while.md)

#### del 关键字（科普）

- 使用 `del` 关键字(`delete`) 同样可以删除列表中元素
- `del` 关键字本质上是用来 **将一个变量从内存中删除的**
- 如果使用 `del` 关键字将变量从内存中删除，后续的代码就不能再使用这个变量了

```python
del name_list[1]
```

## is 与 == 区别：

- is 用于判断 两个变量 引用对象是否为同一个
- == 用于判断 引用变量的值 是否相等
