## 用于名称文字的拼音首字母分组

```js
1. 下载

   npm i pinyin-grouping

2. 引入

   import data_letter_sort from "pinyin-grouping";

3. 使用

   data_letter_sort(parameter1,parameter2)

4. 参数说明

   parameter1 是一维数组 例如：[{a:"555",b:"name1"},{a:"556",b:"name2"}];
   parameter2 是 String 类型 用于传入用数组对象下的哪个字段分组；

5. example:
   import data_letter_sort from "pinyin-grouping";

   let arr = [{a:"555",b:"youname"},{a:"556",b:"myname"}];
   //我想以对象中的 b 字段分组
   let newArr = data_letter_sort(arr,"b")
```
