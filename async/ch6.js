

function everyXsecsForYsecs(func, interval, duration) {

  // ADD CODE HERE

  const intervalId = setInterval(func, interval * 1000);

  setTimeout(() => clearInterval(intervalId), duration * 1000)

}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
