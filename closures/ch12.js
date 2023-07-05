

function censor() {
  const dict = {}
  return (...args) => {
    if(args.length === 2) {
      dict[args[0]] = args[1]
      return
    }
    else if(args.length === 1) {
      console.log(dict);
      let result;
      for(let key in dict) {
        result = args[0].replace(key, dict[key])
      }
      return result
    }
  }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

