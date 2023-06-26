// myIndexOf创建一个接受数组和元素的 函数，并 console.logs 数组中元素的索引，如果不存在则返回 -1。
// 假设“ele”将是原始数据类型（没有数组或对象）。
// 不要在您的解决方案中使用内置的“indexOf”方法！


function myIndexOf(array, ele){
  let index = -1;
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === ele) index = i;
  }
  console.log(index)
}

myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
myIndexOf(["a", "b", "c"], "a") //=> 0
myIndexOf(["a", "b", "c"], "d") //=> -1