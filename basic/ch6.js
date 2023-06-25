
// letterExists创建一个接受单词（字符串）和字符（字符串）的 函数 ，
// 并 console.logs 是否可以在该单词中找到该字母。


function letterExists(word, letter) {
  console.log(word.includes(letter));
}

letterExists("superman", "e") //=> true
letterExists("starship", "S") //=> false
letterExists("th1s", "1") //=> true
letterExists("he!lo", "!") //=> true