# 条件语句

## if 语句

```python
if 要判断的条件:
    条件成立时，要做的事情
    ……
else if ...:
    ...
else:
    ...
```

### 随机数的处理

- 在 `Python` 中，要使用随机数，首先需要导入 **随机数** 的 **模块** —— “工具包”

```python
import random
```

- 导入模块后，可以直接在 **模块名称** 后面敲一个 `.` 然后按 `Tab` 键，会提示该模块中包含的所有函数

- `random.randint(a, b)` ，返回 `[a, b]` 之间的整数，包含 `a` 和 `b`
- 例如：

```python
random.randint(12, 20)  # 生成的随机数n: 12 <= n <= 20
random.randint(20, 20)  # 结果永远是 20
random.randint(20, 10)  # 该语句是错误的，下限必须小于上限
```
