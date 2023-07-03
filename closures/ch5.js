function after(count, func) {
  let counter = 0;
  return (val) => {
    counter ++;
    if(counter >= count) func(val)
  }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
afterCalled(); 
afterCalled(); 
afterCalled(); 
