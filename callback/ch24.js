
// Challenge 24
function myForEach(array, callback) {
  for (let i =0; i < array.length; i++) {
      // To solve edge case: 
      // var arr=[0, undefined, 2]; arr[10] = 10;
      // From https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264#gistcomment-2209454
      if(i in array){
          callback(array[i]);
      }
}
}

// You could not use arrow function to assign prototype method! 
Array.prototype.myForEach = function(callback)  {
for(let i =0; i<this.length; i++){
  if(i in this) {
      callback(this[i], i, this);
  }
}
};

let sum = 0;

function addToSum(num) {
sum += num;
}

/*** Uncomment these to check your work! ***/
const numsArray = [1, 2, 3];
myForEach(numsArray, addToSum);
console.log(sum); // Should output 6

sum = 0;
numsArray.myForEach(addToSum);
console.log(sum); // Should output 6, too. 