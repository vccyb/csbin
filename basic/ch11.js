
// longestWord创建一个返回句子中最长单词的 函数。
// 如果存在联系，该函数应返回后面的单词。

function longestWord(sentence) {
  let arr = sentence.split(" ")
  let res = arr[0]
  for(let i = 1; i < arr.length; i ++) {
    if(res.length <= arr[i].length) {
      res = arr[i]
    }
  }
  return res;
}

//Uncomment the lines below to test your function:

console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('JavaScript')); // => 'JavaScript'
console.log(longestWord('')); // => ''
