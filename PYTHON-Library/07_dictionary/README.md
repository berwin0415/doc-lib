# 字典

## 一、字典的定义

- 字典使用 **键值对** 存储数据，键值对之间使用 `,` 分隔

```python
xiaoming = {
    key1: 'value1',
    key2: 'value1',
}
```

## 二、字典常用操作

```
In [1]: xiaoming.
xiaoming.clear       xiaoming.items       xiaoming.setdefault
xiaoming.copy        xiaoming.keys        xiaoming.update
xiaoming.fromkeys    xiaoming.pop         xiaoming.values
xiaoming.get         xiaoming.popitem
```

## 三、循环遍历

```python
# for 循环内部使用的 `key 的变量` in 字典
for k in xiaoming:
    print("%s: %s" % (k, xiaoming[k]))
```
