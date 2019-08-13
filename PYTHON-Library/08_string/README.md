
## 04. 字符串

### 4.1 字符串的定义

* **字符串** 就是 **一串字符**，是编程语言中表示文本的数据类型
* 在 Python 中可以使用 **一对双引号** `"` 或者 **一对单引号** `'` 定义一个字符串
    * 虽然可以使用 `\"` 或者 `\'` 做字符串的转义，但是在实际开发中：
        * 如果字符串内部需要使用 `"`，可以使用 `'` 定义字符串
        * 如果字符串内部需要使用 `'`，可以使用 `"` 定义字符串
* 可以使用 **索引** 获取一个字符串中 **指定位置的字符**，索引计数从 **0** 开始
* 也可以使用 `for` **循环遍历** 字符串中每一个字符

> 大多数编程语言都是用 `"` 来定义字符串

```python
string = "Hello Python"

for c in string:
    print(c)

```

![005_字符串示意图-w500](media/14972568611505/005_%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%A4%BA%E6%84%8F%E5%9B%BE.png)

### 4.2 字符串的常用操作

* 在 `ipython3` 中定义一个 **字符串**，例如：`hello_str = ""`
* 输入 `hello_str.` 按下 `TAB` 键，`ipython` 会提示 **字符串** 能够使用的 **方法** 如下：

```
In [1]: hello_str.
hello_str.capitalize    hello_str.isidentifier  hello_str.rindex
hello_str.casefold      hello_str.islower       hello_str.rjust
hello_str.center        hello_str.isnumeric     hello_str.rpartition
hello_str.count         hello_str.isprintable   hello_str.rsplit
hello_str.encode        hello_str.isspace       hello_str.rstrip
hello_str.endswith      hello_str.istitle       hello_str.split
hello_str.expandtabs    hello_str.isupper       hello_str.splitlines
hello_str.find          hello_str.join          hello_str.startswith
hello_str.format        hello_str.ljust         hello_str.strip
hello_str.format_map    hello_str.lower         hello_str.swapcase
hello_str.index         hello_str.lstrip        hello_str.title
hello_str.isalnum       hello_str.maketrans     hello_str.translate
hello_str.isalpha       hello_str.partition     hello_str.upper
hello_str.isdecimal     hello_str.replace       hello_str.zfill
hello_str.isdigit       hello_str.rfind
```

> 提示：正是因为 python 内置提供的方法足够多，才使得在开发时，能够针对字符串进行更加灵活的操作！应对更多的开发需求！

#### 1) 判断类型 - 9

| 方法 | 说明 |
| --- | --- |
| string.isspace() | 如果 string 中只包含空格，则返回 True | 
| string.isalnum() | 如果 string 至少有一个字符并且所有字符都是字母或数字则返回 True |
| string.isalpha() | 如果 string 至少有一个字符并且所有字符都是字母则返回 True |
| string.isdecimal() | 如果 string 只包含数字则返回 True，`全角数字` | 
| string.isdigit() | 如果 string 只包含数字则返回 True，`全角数字`、`⑴`、`\u00b2` |
| string.isnumeric() | 如果 string 只包含数字则返回 True，`全角数字`，`汉字数字` |  
| string.istitle() | 如果 string 是标题化的(每个单词的首字母大写)则返回 True | 
| string.islower() | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True | 
| string.isupper() | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是大写，则返回 True | 

#### 2) 查找和替换 - 7

| 方法 | 说明 |
| --- | --- |
| string.startswith(str) | 检查字符串是否是以 str 开头，是则返回 True |
| string.endswith(str) | 检查字符串是否是以 str 结束，是则返回 True |
| string.find(str, start=0, end=len(string)) | 检测 str 是否包含在 string 中，如果 start 和 end 指定范围，则检查是否包含在指定范围内，如果是返回开始的索引值，否则返回 `-1` |
| string.rfind(str, start=0, end=len(string)) | 类似于 find()，不过是从右边开始查找 | 
| string.index(str, start=0, end=len(string)) | 跟 find() 方法类似，不过如果 str 不在 string 会报错 |
| string.rindex(str, start=0, end=len(string)) | 类似于 index()，不过是从右边开始 |
| string.replace(old_str, new_str, num=string.count(old)) | 把 string 中的 old_str 替换成 new_str，如果 num 指定，则替换不超过 num 次 |

#### 3) 大小写转换 - 5

| 方法 | 说明 |
| --- | --- |
| string.capitalize() | 把字符串的第一个字符大写 |
| string.title() | 把字符串的每个单词首字母大写 |
| string.lower() | 转换 string 中所有大写字符为小写 |
| string.upper() | 转换 string 中的小写字母为大写 |
| string.swapcase() | 翻转 string 中的大小写 |

#### 4) 文本对齐 - 3

| 方法 | 说明 |
| --- | --- |
| string.ljust(width) | 返回一个原字符串左对齐，并使用空格填充至长度 width 的新字符串 |
| string.rjust(width) | 返回一个原字符串右对齐，并使用空格填充至长度 width 的新字符串 |
| string.center(width) | 返回一个原字符串居中，并使用空格填充至长度 width 的新字符串 |

#### 5) 去除空白字符 - 3

| 方法 | 说明 |
| --- | --- |
| string.lstrip() | 截掉 string 左边（开始）的空白字符 |
| string.rstrip() | 截掉 string 右边（末尾）的空白字符 |
| string.strip() | 截掉 string 左右两边的空白字符 |

#### 6) 拆分和连接 - 5

| 方法 | 说明 |
| --- | --- |
| string.partition(str) | 把字符串 string 分成一个 3 元素的元组 (str前面, str, str后面) |
| string.rpartition(str) | 类似于 partition() 方法，不过是从右边开始查找 |
| string.split(str="", num) | 以 str 为分隔符拆分 string，如果 num 有指定值，则仅分隔 num + 1 个子字符串，str 默认包含 '\r', '\t', '\n' 和空格 |
| string.splitlines() | 按照行('\r', '\n', '\r\n')分隔，返回一个包含各行作为元素的列表 |
| string.join(seq) | 以 string 作为分隔符，将 seq 中所有的元素（的字符串表示）合并为一个新的字符串 |

### 4.3 字符串的切片

* **切片** 方法适用于 **字符串**、**列表**、**元组**
    * **切片** 使用 **索引值** 来限定范围，从一个大的 **字符串** 中 **切出** 小的 **字符串**
    * **列表** 和 **元组** 都是 **有序** 的集合，都能够 **通过索引值** 获取到对应的数据
    * **字典** 是一个 **无序** 的集合，是使用 **键值对** 保存数据

![006_字符串索引示意图](media/14972568611505/006_%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B4%A2%E5%BC%95%E7%A4%BA%E6%84%8F%E5%9B%BE.png)

```
字符串[开始索引:结束索引:步长]
```

**注意**：

1. 指定的区间属于 **左闭右开** 型 `[开始索引,  结束索引)` => `开始索引 >= 范围 < 结束索引`
    * 从 `起始` 位开始，到 **`结束`位的前一位** 结束（**不包含结束位本身**)
2. 从头开始，**开始索引** **数字可以省略，冒号不能省略**
3. 到末尾结束，**结束索引** **数字可以省略，冒号不能省略**
4. 步长默认为 `1`，如果连续切片，**数字和冒号都可以省略**

#### 索引的顺序和倒序

* 在 Python 中不仅支持 **顺序索引**，同时还支持 **倒序索引**
* 所谓倒序索引就是 **从右向左** 计算索引
    * 最右边的索引值是 **-1**，依次递减

**演练需求**

* 1. 截取从 2 ~ 5 位置 的字符串
* 2. 截取从 2 ~ `末尾` 的字符串
* 3. 截取从 `开始` ~ 5 位置 的字符串
* 4. 截取完整的字符串
* 5. 从开始位置，每隔一个字符截取字符串
* 6. 从索引 1 开始，每隔一个取一个
* 7. 截取从 2 ~ `末尾 - 1` 的字符串
* 8. 截取字符串末尾两个字符
* 9. 字符串的逆序（面试题）

**答案**

```
num_str = "0123456789"

# 1. 截取从 2 ~ 5 位置 的字符串
print(num_str[2:6])

# 2. 截取从 2 ~ `末尾` 的字符串
print(num_str[2:])

# 3. 截取从 `开始` ~ 5 位置 的字符串
print(num_str[:6])

# 4. 截取完整的字符串
print(num_str[:])

# 5. 从开始位置，每隔一个字符截取字符串
print(num_str[::2])

# 6. 从索引 1 开始，每隔一个取一个
print(num_str[1::2])

# 倒序切片
# -1 表示倒数第一个字符
print(num_str[-1])

# 7. 截取从 2 ~ `末尾 - 1` 的字符串
print(num_str[2:-1])

# 8. 截取字符串末尾两个字符
print(num_str[-2:])

# 9. 字符串的逆序（面试题）
print(num_str[::-1])

```