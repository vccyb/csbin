// 创建一个函数unique，用于 console.logs 一个数组，其中输入数组的所有重复项均已被删除；换句话说，剩下的每个元素都是独一无二的。


function unique(array) {
  const set = new Set(array)
  console.log([...set])
}

unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
unique(["a", "a", "c", "aa", "b", "b"]) // => ["a", "c", "aa", "b"]
