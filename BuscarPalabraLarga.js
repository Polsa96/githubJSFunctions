// Complete the function that taking an array of strings as argument returns the longest one, in case two strings have the same length it should return the first one.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let paraulaLlarga=``;

  
  for(i=0;i<param.length;i++){
       if(paraulaLlarga.length<param[i].length){
        paraulaLlarga=param[i];
    }
  
  }

  return paraulaLlarga;
}

console.log(findLongestWord(avengers));