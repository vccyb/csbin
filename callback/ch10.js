


function multiMap(arrVals, arrCallbacks) {
  const matchObj = {};
  for(let i = 0; i < arrVals.length; i ++) {
    matchObj[arrVals[i]] = [];
    for(let j = 0; j < arrCallbacks.length; j ++) {
      matchObj[arrVals[i]].push(arrCallbacks[j](arrVals[i]))
    }
  }
  return matchObj
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }



