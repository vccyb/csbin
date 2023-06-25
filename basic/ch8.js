
// 创建一个函数range，控制台按顺序记录“start”和“end”之间的所有数字。

function range(start, end) {
  let str = ""
  for(let i = start; i <= end ; i ++) {
    if(i === end) str += end
    else str += `${i}, `
  }
  console.log(str);
}

//Uncomment the lines below to test your code
range(1,4) //=> 1, 2, 3, 4
range(4,2) //=>