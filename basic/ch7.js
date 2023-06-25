

// 创建一个函数isPrime，console.logs 一个布尔值，指示“number”是否为素数。


function isPrime(number) {

  if(number <= 1) {
    console.log(false)
    return
  }
  
  let flag = true;
  for(let i = 2; i < number; i ++) {
    if(number % i === 0) {
      flag = false
      break;
    }
  }
  console.log(flag)
  
}

isPrime(-7); // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false