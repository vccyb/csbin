

function createFunctionPrinter(input) {
  const printFun = () => {
    console.log(input);
  }
  return printFun
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');
