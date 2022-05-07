## 用于名称文字的拼音首字母分组

### 1、 下载

```shell
   npm i pinyin-grouping
```

### 2、引入

```js
import { data_letter_sort } from "pinyin-grouping";
```

### 3、参数说明

```js
/**
     * @description:用于名称文字的拼音首字母分组
     * @param {Array} arr 一维数组 例如：[{a:"555",b:"name1"},{a:"556",b:"name2"}]
     * @param {String} field  数组对象下分组的目标字段
     * @return {Object} 结果示例如下
     * result= {
            tag: [
                'A', 'B', 'C', 'F', 'G',
                'H', 'I', 'J', 'L', 'N',
                'Q', 'S', 'T', 'U', 'W',
                'X', 'Y', 'Z', '#'
            ],
            list: [
                { letter: 'A', data: [Array] },
                { letter: 'B', data: [Array] },
                { letter: 'C', data: [Array] },
                { letter: 'F', data: [Array] },
                { letter: 'G', data: [Array] },
                { letter: 'H', data: [Array] },
                { letter: 'I', data: [Array] },
                { letter: 'J', data: [Array] },
                { letter: 'L', data: [Array] },
                { letter: 'N', data: [Array] },
                { letter: 'Q', data: [Array] },
                { letter: 'S', data: [Array] },
                { letter: 'T', data: [Array] },
                { letter: 'U', data: [Array] },
                { letter: 'W', data: [Array] },
                { letter: 'X', data: [Array] },
                { letter: 'Y', data: [Array] },
                { letter: 'Z', data: [Array] },
                { letter: '#', data: [Array] }
            ]
        }
     */
data_letter_sort(arr, field);
```

### 5、example

```js
import data_letter_sort from "pinyin-grouping";

let arr = [
    { a: "555", b: "youname" },
    { a: "556", b: "myname" },
];
//我想以对象中的 b 字段分组
let newArr = data_letter_sort(arr, "b");
```

### 1.0.10 版本说明

1、修复插件 bug;  
2、重置返回结构(新结构如上);  
3、引入方式修改 按需引入

### 1.0.11 版本说明

处理数组 length 为 0 的特殊情况
