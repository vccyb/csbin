
// 创建一个函数disemvowel，该函数接受一个字符串并返回一个删除了所有元音的字符串。

function disemvowel(string) {
  // your code here...
  const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let res = ""
  for(let i = 0; i < string.length; i ++) {
    if(arr.includes(string[i])) continue
    res += string[i]
  }
  return res;
}


//Uncomment the lines below to test your function:

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
