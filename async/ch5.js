

function limitedRepeat() {
  // ADD CODE HERE
  const intervalId = setInterval(() => {
    console.log('hi for now')
  }, 1000);

  setTimeout(() => clearInterval(intervalId), 5000)
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now
