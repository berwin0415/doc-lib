## 正则表达式

### 方法

#### 1. exec()

语法：

```js
RegExpObject.exec(string)
```

返回值：

```js
["W3School", index: 16, input: "Visit W3School, W3School is a place to study web technology.", groups: undefined]
```

## 事件的节流(throttle)与防抖(debounce)

### 防抖 debeounce

函数在一定时间内，没有被再次触发，才执行函数

实现思路： 通过setTimeout

### 节流

函数被触发后一定事件内，无法被再次触发