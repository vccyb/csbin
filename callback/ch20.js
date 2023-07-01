function pipe(arrOfFuncs, value) {
  let res = value;
  for(let i = 0; i < arrOfFuncs.length; i ++) {
    res = arrOfFuncs[i](res);
  }
  return res;
}

// /*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
