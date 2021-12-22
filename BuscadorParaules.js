// Create a function that receives by parameter an array and the value that you want to check that exists inside this array - it checks if the element exists,
//  in case they exist it returns us a true and the position of this element and by the contra a false. You can use this array to test your function:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(param) {
  let comptador = 0;
  let name = `Peter`;

  for (i = 0; i < param.length; i++) {
    comptador++;
    let bandera = false;

    if (name == param[i]) {
      console.log(`El nom de ${name} troba en la posició ${comptador}`);
      bandera = true;
      return bandera;
    }

    if (bandera == false && comptador == param.length) {
      console.log(`No existeix el nom de ${name}`);
      return bandera;
    }
  }
}

finderName(nameFinder);