

class SecondClock {
  constructor(cb) {
    this.cb = cb
    this.index = 1
  }


  start() {
    this.intervalId = setInterval(() => {
      this.cb(this.index);
      this.index ++;
    }, 1000);
  }

  reset() {
    clearInterval(this.intervalId)
    this.index = 1
  }
}

const clock = new SecondClock((val) => { console.log(val) });
console.log("Started Clock.");
clock.start();
setTimeout(() => {
    clock.reset();
    console.log("Stopped Clock after 6 seconds.");
}, 6000);


