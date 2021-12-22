// Create a function that returns the number of times each of the words in it is repeated.  You can use this array to test your function:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code"
];

function repeatCounter(param) {
  let bandera = [param[0]];

  //console.log(bandera.length, bandera[0]);

  guardaBandera(param, bandera);
  repeticio(param, bandera);
  console.log(`----------------`);
}

repeatCounter(counterWords);

function guardaBandera(param, bandera) {    //En aquesta funció s'emmagatzemen totes les paraules diferents a l'array bandera, per després poder mostrar-los-hi
  let comparador = false;

  for (i = 0; i < param.length; i++) {
    for (j = 0; j < bandera.length; j++) {
      if (bandera[j] == param[i]) {
        comparador = true;
      }
    }
    if (!comparador) {
      bandera.push(param[i]);
      //console.log(bandera);
    }

    comparador = false;
    //console.log("segona volta");
  }
  //console.log("primera volta");
  console.log(bandera);
}

function repeticio(param, bandera) {    //En aquesta funció s'observa quants cops es repeteix cada paraula
  let comptador = 0;
  for (i = 0; i < bandera.length; i++) {
    for (j = 0; j < param.length; j++) {
      if (bandera[i] == param[j]) {
        comptador++;
      }
    }

    console.log(`La paraula ${bandera[i]} es repeteix ${comptador}`);
    comptador = 0;
  }
}
