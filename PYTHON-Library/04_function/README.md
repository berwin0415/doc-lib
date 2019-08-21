# 函数

## 01. 函数的基本使用

```py
# 定义
def func_name(param1,param2):
    函数封装的代码

# 使用
func_name(1,2)
```

> 函数必须先定义后使用

## 02. 使用模块中的函数


```python
import module01

module01.print_line("-", 80)
print(module01.name)
```

### 2.1 Pyc 文件（了解）

> `C` 是 `compiled` **编译过** 的意思

**操作步骤**

1. 浏览程序目录会发现一个 `__pycache__` 的目录
2. 目录下会有一个 `hm_10_分隔线模块.cpython-35.pyc` 文件，`cpython-35` 表示 `Python` 解释器的版本
3. 这个 `pyc` 文件是由 Python 解释器将 **模块的源码** 转换为 **字节码**
   - `Python` 这样保存 **字节码** 是作为一种启动 **速度的优化**

**字节码**

- `Python` 在解释源程序时是分成两个步骤的

  1. 首先处理源代码，**编译** 生成一个二进制 **字节码**
  2. 再对 **字节码** 进行处理，才会生成 CPU 能够识别的 **机器码**

- 有了模块的字节码文件之后，下一次运行程序时，如果在 **上次保存字节码之后** 没有修改过源代码，Python 将会加载 .pyc 文件并跳过编译这个步骤
- 当 `Python` 重编译时，它会自动检查源文件和字节码文件的时间戳
- 如果你又修改了源代码，下次程序运行时，字节码将自动重新创建


## 03. 缺省参数

- 定义函数时，可以给 **某个参数** 指定一个**默认值**，具有默认值的参数就叫做 **缺省参数**
- 调用函数时，如果没有传入 **缺省参数** 的值，则在函数内部使用定义函数时指定的 **参数默认值**
- 函数的缺省参数，**将常见的值设置为参数的缺省值**，从而 **简化函数的调用**

**在参数后使用赋值语句，可以指定参数的缺省值**
```python
def print_info(name, gender=True):

    gender_text = "男生"
    if not gender:
        gender_text = "女生"

    print("%s 是 %s" % (name, gender_text))
```

### 缺省参数的注意事项

#### 1) 缺省参数的定义位置

- **必须保证** **带有默认值的缺省参数** **在参数列表末尾**


#### 2) 调用带有多个缺省参数的函数

- 在 **调用函数时**，如果有 **多个缺省参数**，**需要指定参数名**，这样解释器才能够知道参数的对应关系！

```python
def print_info(name, title="", gender=True):

    gender_text = "男生"

    if not gender:
        gender_text = "女生"

    print("%s%s 是 %s" % (title, name, gender_text))

print_info("小明")
print_info("老王", title="班长")
print_info("小美", gender=False)

```

## 04. 多值参数

- `python` 中有 **两种** 多值参数：
  - 参数名前增加 **一个** `*` 可以接收 **元组**
  - 参数名前增加 **两个** `*` 可以接收 **字典**

```python
def demo(num, *args, **kwargs):

    print(num)
    print(args)
    print(kwargs)


demo(1, 2, 3, 4, 5, name="小明", age=18, gender=True)

```

## 04. 元组和字典的拆包（知道）

- 在调用带有多值参数的函数时，如果希望：
  - 将一个 **元组变量**，直接传递给 `args`
  - 将一个 **字典变量**，直接传递给 `kwargs`
- 就可以使用 **拆包**，简化参数的传递，**拆包** 的方式是：
  - 在 **元组变量前**，增加 **一个** `*`
  - 在 **字典变量前**，增加 **两个** `*`

```python
def demo(*args, **kwargs):

    print(args)
    print(kwargs)


# 需要将一个元组变量/字典变量传递给函数对应的参数
gl_nums = (1, 2, 3)
gl_xiaoming = {"name": "小明", "age": 18}

# 会把 num_tuple 和 xiaoming 作为元组传递个 args
# demo(gl_nums, gl_xiaoming)
demo(*gl_nums, **gl_xiaoming)

```
