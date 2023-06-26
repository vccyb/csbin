

// passingStudents创建一个接受学生对象数组的 函数。
// 它应该遍历学生列表并返回平均成绩至少为 70 分的所有学生姓名的数组。

function passingStudents(students) {
  const res = [];
  students.forEach(stu => {
    let sum = 0;
    stu.grades.forEach(item => sum += item.score)
    if((sum / stu.grades.length) >= 70) {
      res.push(stu.name)
    }
  });
  return res;
}


//Uncomment the lines below to test your function:

var students = [
  {
    "name": "Marco",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Donna",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Jukay",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]