// divisibleByFivePairSum创建一个接受数字数组的 函数。
// 它应该返回一个由所有索引对组成的数组，其总和是五的倍数。


function divisibleByFivePairSum(array){
  const res = [];
  for(let i = 0; i < array.length; i ++) {
    for(let j = i + 1; j < array.length; j ++) {
      if((array[i] + array[j]) % 5 === 0) {
        res.push([i,j]);
      }
    }
  }
  return res;
}


//Uncomment the lines below to test your function:

console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]