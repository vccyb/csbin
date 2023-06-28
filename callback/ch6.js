

// 创建一个名为 的函数reduce，该函数接受一个数组并将元素减少为单个值。
// 例如，它可以对所有数字求和、相乘，或者可以放入函数中的任何运算。



function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for(let i = 0; i < array.length; i ++) {
    acc = callback(array[i])
  }
  return acc;
}