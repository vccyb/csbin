


// Challenge 9
function objOfMatches(array1, array2, callback) {
  const matchObj = {};

  for(let i = 0; i < array1.length; i ++) {
    if(callback(array1[i]) === array2[i]){
      matchObj[array1[i]] = array2[i];
    }
  }
  return matchObj
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

