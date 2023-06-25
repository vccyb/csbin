
// 创建一个函数， buildSentence该函数接受三个单词（字符串）并将它们加在一起，
// 然后 console.logs 整个句子（字符串），并包含大写和标点符号。


function buildSentence(word1, word2, word3) {
  let res = word1 + ' ' +  word2 + ' ' +  word3 + '.'
  res = res[0].toUpperCase() + res.substring(1);
  console.log(res);
}



buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
buildSentence("we're", "number", "1") //=> "We're number 1."