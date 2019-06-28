# 排序

## <a name="index" id="index">目录</a>

- [一、冒泡排序](#chapter-one)
- [二、选择排序](#chapter-two)
- [三、快速排序](#chapter-three)

## <a name="chapter-one" id="chapter-one">一、冒泡排序</a>

> [返回目录](#index)

```js
const bubbleSort = arr => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }
    return arr;
};
```

## <a name="chapter-two" id="chapter-two">二、选择排序</a>

> [返回目录](#index)

```js
const selectSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j <arr.length; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}
```

## <a name="chapter-three" id="chapter-three">三、快速排序</a>

> [返回目录](#index)

选择一个标尺元素，比标尺元素的大的放一边，小的放另一边，依次递归至结束

```js
const quickSort = arr => {
    const sort = (arr) => {
        const len = arr.length
        if(len < 2) {return arr}

        let flag = arr[0]
        let left = [];
        let right = [];

        for (let i = 1; i < len; i++) {
            if (arr[i]  < flag) {
                left.push(arr[i])
            }else {
                right.push(arr[i])
            }
        }

        return sort(left).concat(flag,sort(right))

    }
    return sort(arr)
}
```

但是存在占用内存过大的问题，采取in-place(内部直接替换)方式优化

```js
const quickSort = arr => {
    // 找到数组标尺元素下角标
    const findCenter = (arr, left, right) => {
        let flag = arr[left]
        let idx = left + 1;
        for (let i = idx; i <= right; i++) {
            if (arr[i] < flag) {
                [arr[i], arr[idx]] = [arr[idx], arr[i]]
                idx++
            }
        }
        [arr[idx - 1], arr[left]] = [arr[left], arr[idx - 1]]
        return idx
    }
    const sort = (arr, left, right) => {
        if (left < right) {
            const center = findCenter(arr, left, right);
            sort(arr, left, center - 1)
            sort(arr, center, right)
        }
    }
    sort(arr, 0, arr.length - 1)
    return arr;
}
```
