


function majority(array, callback) {
  let t = 0, f = 0;
  for(let i = 0; i < array.length; i ++) {
    if(callback(array[i])) t ++;
    else f++;
  }
  console.log(t,f);
  return t > f 
}

/*** Uncomment these to check your work! ***/
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false