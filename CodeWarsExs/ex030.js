function getMiddle(s) {
  const caracteres = s.length;
  if (caracteres%2==0){
    return `${s[(Math.floor((caracteres/2)-1))]}`+`${s[(Math.ceil((caracteres/2)))]}`;
  }else {
    return s[(Math.floor(caracteres/2))];
  }
}
/*You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/