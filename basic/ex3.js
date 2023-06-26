

// secretCipher创建一个接受字符串（句子）和对象（密码）的 函数。返回一个字符串，其中每个字符都被替换为密码中对应的值。
// 如果密码中不存在该字符，则使用原始字符。

function secretCipher(sentence, cipher) {
  let res = ""
  for (let i = 0; i < sentence.length; i++) {
    if (cipher.hasOwnProperty(sentence[i])) {
      res += cipher[sentence[i]]
    } else {
      res += sentence[i]
    }
  }
  return res;
}



//Uncomment the lines below to test your function:

console.log(secretCipher("lqq me on flcebzzk", { l: "a", q: "d", z: "o" })); //=> "add me on facebook"
console.log(secretCipher("where are you???", { v: "l", '?': "!" })) //=> "where are you!!!"
console.log(secretCipher("twmce", { m: "n", t: "d", w: "a" })); //=> "dance"
