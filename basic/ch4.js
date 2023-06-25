
// buildGreeting创建一个需要时间（整数）和名称（字符串）的 函数 ，并根据以下规则打印问候语：
// 如果时间在 0（含）和 11（含）之间：“早上好，<name>！
// 如果时间在 12 点（含）和 16 点（含）之间：“下午好，<name>！
// 如果时间在 17 点（含）和 23 点（含）之间：“晚上好，<name>！
// 如果时间是别的东西的话：“那不是真实的时间，<名字>。也许你需要睡觉！





function buildGreeting(time, name) {
  let helloTime;
  if( time >= 0 && time <= 11) {
    helloTime = "早上好"
  }else if(time >= 12 && time <= 16) {
    helloTime = "下午好"
  }else if(time >= 17 && time <= 23) {
    helloTime = "晚上好"
  }

  if(['早上好', "下午好", "晚上好"].includes(helloTime)) {
    console.log(`${helloTime}, ${name}!`);
  }else {
    console.log(`那不是真实的时间，${name}。也许你需要睡觉！`);
  }

}


buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
buildGreeting(12, "John") //=> "Good Afternoon, John!"
buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"