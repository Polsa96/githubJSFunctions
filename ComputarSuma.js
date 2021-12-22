// Calculating a sum can be as simple as iterating over an array and adding up each of the elements.
// Implement the function called sumNumbers which takes an array of numbers as an argument and returns the sum of all the numbers in the array.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let comptador=0;
  for(i=0;i<param.length;i++){
      comptador+=param[i];
  }

  return comptador;
}

console.log(sumAll(numbers));