// 创建一个函数objectBuilder，该函数接受一个数字并返回一个对象，
// 该对象的键为 0 到 number，值是该数字乘以 5。


function objectBuilder(count) {
  const obj = {}
  for(let i = 0; i <= count; i ++) {
    obj[i] = i * 5;
  }

  return obj
}


//Uncomment the lines below to test your function:

console.log(objectBuilder(4)); //=> {
  // 0: 0,
  // 1: 5,
  // 2: 10,
  // 3: 15,
  // 4: 20,
// }
console.log(objectBuilder(0)); //=> { 0: 0 }
