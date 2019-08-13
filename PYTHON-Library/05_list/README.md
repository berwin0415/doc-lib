# 列表

# 一、列表的定义

`List`（列表） 是 `Python` 中使用 **最频繁** 的数据类型，在其他语言中通常叫做 **数组**

> 注意：从列表中取值时，如果 **超出索引范围**，程序会报错

```python
name_list = ["zhangsan", "lisi", "wangwu"]
```

## 1.1 列表常用操作

- 在 `ipython3` 中定义一个 **列表**，例如：`name_list = []`
- 输入 `name_list.` 按下 `TAB` 键，`ipython` 会提示 **列表** 能够使用的 **方法** 如下：

```
In [1]: name_list.
name_list.append   name_list.count    name_list.insert   name_list.reverse
name_list.clear    name_list.extend   name_list.pop      name_list.sort
name_list.copy     name_list.index    name_list.remove
```

| 序号 | 分类 | 关键字 / 函数 / 方法    | 说明                      |
| ---- | ---- | ----------------------- | ------------------------- |
| 1    | 增加 | 列表.insert(索引, 数据) | 在指定位置插入数据        |
|      |      | 列表.append(数据)       | 在末尾追加数据            |
|      |      | 列表.extend(列表 2)     | 将列表 2 的数据追加到列表 |
| 2    | 修改 | 列表[索引] = 数据       | 修改指定索引的数据        |
| 3    | 删除 | del 列表[索引]          | 删除指定索引的数据        |
|      |      | 列表.remove[数据]       | 删除第一个出现的指定数据  |
|      |      | 列表.pop                | 删除末尾数据              |
|      |      | 列表.pop(索引)          | 删除指定索引数据          |
|      |      | 列表.clear              | 清空列表                  |
| 4    | 统计 | len(列表)               | 列表长度                  |
|      |      | 列表.count(数据)        | 数据在列表中出现的次数    |
| 5    | 排序 | 列表.sort()             | 升序排序                  |
|      |      | 列表.sort(reverse=True) | 降序排序                  |
|      |      | 列表.reverse()          | 逆序、反转                |

## 1.2 循环遍历

- 在 `Python` 中为了提高列表的遍历效率，专门提供的 **迭代 iteration 遍历**
- 使用 `for` 就能够实现迭代遍历

```python
# for 循环内部使用的变量 in 列表
for name in name_list:

    循环内部针对列表元素进行操作
    print(name)

```
