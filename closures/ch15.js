

function russianRoulette(num) {
  const endOfGame = num - 1;
  let counter = 0;
	function reload(){
    if(counter > endOfGame) return 'reload to play again'
    const result =  counter === endOfGame ? "bang" : "click";
    counter ++;
    return result;
  }
  return reload;
}


