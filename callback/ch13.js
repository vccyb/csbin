


function prioritize(array, callback) {
  let arr = [];
  for(let i = 0; i < array.length; i ++) {
    if(callback(array[i])) arr.unshift(array[i])
    else arr.push(array[i])
  }
  return arr
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']