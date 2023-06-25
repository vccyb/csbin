

// indexOf是一个可以对字符串 (string1) 调用并接受另一个字符串 (string2) 作为参数的函数。
// 它从左到右搜索 string1，检查每个字符以查看是否可以找到 string2。
// 如果找到 string2，则返回与 string2 匹配的第一个字符的索引位置。如果找不到 string2，则返回负一：-1。
// 输入您认为 indexOf 将为下面每个内容返回的索引位置。
function indexOf(str1, str2) {
  return str1.indexOf(str2)
}

console.log( indexOf("CodeSmith", "o") === 1 )
console.log( indexOf("hello", "ll") === 2 )
console.log( indexOf("zebra", "z") === 0 )
console.log( indexOf("banana", "B") === -1 )