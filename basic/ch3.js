
// 创建一个函数 lastLetter，该函数接受一个单词（字符串）并 console.logs 该单词的最后一个字符/字母。
// 提示：请记住，字符串中的每个字符/字母都有一个索引位置，您可以使用方括号访问该索引位置：[]




function lastLetter(word) {
  console.log(word[word.length - 1])
}

//Uncomment the lines below to test your code
lastLetter("hello") //=> "o"
lastLetter("goodbye!") //=> "!"
lastLetter("ZeltoiD") //=> "D"