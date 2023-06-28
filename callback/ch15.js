


function groupBy(array, callback) {
  let obj = {}

  array.forEach(e => {
    let val = callback(e)  
    if(obj.hasOwnProperty(val)) {
      obj[val].push(e)
    }else {
      obj[val] = [e]
    }
  });

  return obj
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }