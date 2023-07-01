

function rating(arrOfFuncs, value) {
  let count = 0;
  arrOfFuncs.forEach(fn => {
    if(fn(value)) {
      count ++;
    }
  });
  return count / arrOfFuncs.length * 100
}

// /*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75
