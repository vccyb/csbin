

function delay(func, wait) {
  return setTimeout(() => {
    func()
  }, wait)
}