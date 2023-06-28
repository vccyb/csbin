


function objectFilter(obj, callback) {
  const newObj = {};
  for(let key in obj) {
    if(callback(key) === obj[key]) {
      newObj[key] = callback(key)
    }
  }
  return newObj;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


