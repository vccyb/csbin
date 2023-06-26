
// 创建一个函数leastCommonMultiple，该函数接受两个数字（整数）作为输入，
// 并返回两个输入的倍数的最小数字。


// 最小公约数算法
function gcd(a, b) {
  if(b === 0) return a;
  return gcd(b, a % b)
}

// 最下公倍数算法
function leastCommonMultiple(a, b) {
  return a * b / gcd(a, b)
}

//Uncomment the lines below to test your function:

console.log(leastCommonMultiple(2, 3)); //=> 6
console.log(leastCommonMultiple(6, 10)); //=> 30
console.log(leastCommonMultiple(24, 26)); //=> 312