function getCount(str) {
  var soma=0;
  const vogais =["a","e","i","o","u","A","E","I","O","U"];
  for (let i=0; i<str.length;i++){
    if (vogais.includes(str[i])){
       soma++
    }
  }
  console.log (soma);   
  return soma;
}
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/