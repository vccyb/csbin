


function promised(val) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(val)}, 2000)
  })
  return myPromise
}

  const createPromise = promised('wait for it...');
  createPromise.then((val) => console.log)