// Calculating an average is an extremely common task. You can use this array to test your function:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let promig = 0;
  let comptador=0;
  for (i = 0; i < param.length; i++) {
    promig += param[i];
    comptador++;
  }

  promig=promig/comptador;

  return promig;
}

console.log(average(numbers));