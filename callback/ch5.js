
// 在挑战 3 中，您创建了一个名为 的函数map。在本次挑战中，
// 您将map通过创建一个名为 的函数来重建该函数mapWith。
// 这次您将使用forEach内部mapWith而不是使用for循环。

// Challenge 5
function mapWith(array, callback) {
  const res = [];
  forEach(array, el => res.push(callback(el)));
  return res;
}


