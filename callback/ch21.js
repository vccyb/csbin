

function highestFunc(objOfFuncs, subject) {
  let keys = Object.keys(objOfFuncs);

  return keys.slice(1).reduce(
    (a, b) => (objOfFuncs[a](subject) > objOfFuncs[b](subject)) ? a : b,
    keys[0]
  )

}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
