
// 创建一个函数highestScore，该函数接受学生对象数组作为参数。
// 它应该返回一个与得分最高的学生相对应的字符串。
// 该字符串应包含该学生的姓名缩写及其 ID。
// 假设数组至少包含 1 个学生对象，并且得分最高的学生是唯一的（没有平局）。

function highestScore(students) {
  let student = students.sort((a, b) => b.score - a.score)[0];
  let name = student.name.split(" ")[0][0] + student.name.split(" ")[1][0]
  return `${name}${student.id}`

}

//Uncomment the lines below to test your function:

var students = [
{name: 'Will Sentance', id: 128, score: -42},
{name: 'Jamie Bradshaw', id: 32, score: 57},
{name: 'Lisa Simpson', id: 2, score: 99},
{name: 'Luke Skywalker', id: 256, score: 94}
];

console.log(highestScore(students)); //=> 'LS2'