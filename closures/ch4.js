function addByX(x) {
  const addBy = num => {
    return num + x;
  }
  return addBy
}

const addByTwo = addByX(2)


function once(func) {
  let counter = 0;
  let onceVal;
  const innerFunc = val => {
    if(counter === 0) onceVal = func(val)
    counter ++;
    return onceVal
  }
  return innerFunc
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6
