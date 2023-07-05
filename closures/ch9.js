

function cycleIterator(array) {
  let count = 0;
  return () => {
    if(count >= array.length) {
      count = 0;
    }
    const result = array[count]
    count ++;
    return result
  }
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
