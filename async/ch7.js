function delayCounter(target, wait) {

  let counter = 0;

  return () => {
    const intervalId = setInterval(() => {
      counter ++;
      console.log(`After ${counter}, log ${counter}`)
      if(counter === target) {
        clearInterval(intervalId)
      }
    }, wait)
  }


}


const countLogger = delayCounter(3, 1000)
countLogger();