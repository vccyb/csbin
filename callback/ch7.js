

function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return curr.filter(el => acc.includes(el))
  })
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]