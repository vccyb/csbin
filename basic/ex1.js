
// 创建一个函数arrayBuilder，该函数接受 count 对象并返回一个填充了适当数量元素的数组。
// 数组中元素的顺序并不重要，但重复的元素应该分组。

function arrayBuilder(count) {
  const res = [];
  for(let key of Object.keys(count)) {
    for(let i = 0; i < count[key]; i ++) {
      res.push(key)
    }
  }
  return res;
}


//Uncomment the lines below to test your function:

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []
