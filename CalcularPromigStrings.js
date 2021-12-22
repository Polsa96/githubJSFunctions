// Create a function that receives an array as a parameter and when it is a number
// value adds it up and otherwise counts the length of the string and adds it up. 
// You can use this array to test your function:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let comptador = 0;

  for(i=0;i<param.length;i++){
      if(Number.isInteger(param[i])){
          comptador+=param[i];
      }else{
          comptador+=param[i].length;
      }
  }

  return comptador;

}

console.log(averageWord(mixedElements));

