function union(arrays) {
  return arrays.reduce((acc, cur) => {
    const newEle = cur.filter(el => !acc.includes(el))
    return acc.concat(newEle)
  })
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]