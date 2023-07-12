

function callTimes() {
  let counter = 0
  function add() {
    counter ++;
    console.log(counter)
  }
  return add
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2