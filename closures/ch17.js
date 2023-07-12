

function makeFunTester(arrOfTests) {
  function go(func) {
    let isMatch = true
    for(let i = 0; i < arrOfTests.length; i ++) {
      if(func(arrOfTests[i][0]) !== arrOfTests[i][1]) {
        isMatch = false
        break
      }
    }
    return isMatch
  }
  return go
}