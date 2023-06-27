

function addTwo(num) {
  return num + 2;
}

// Challenge 3
function map(array, callback) {
  let res = []
  for(let i = 0; i < array.length; i ++) {
    res[i] = callback(array[i])
  }
  return res;
}

console.log(map([1, 2, 3], addTwo));


