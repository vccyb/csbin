


function countBy(array, callback) {
  const newObj = {};
  for(let i = 0; i < array.length; i ++) {
    let val = callback(array[i])
    if(newObj.hasOwnProperty(val)) {
      newObj[val] += 1;
    } else {
      newObj[val] = 1;
    }
  }
  return newObj
}

// /*** Uncomment these to check your work! ***/
console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';
})); // should log: { odd: 3, even: 2 }