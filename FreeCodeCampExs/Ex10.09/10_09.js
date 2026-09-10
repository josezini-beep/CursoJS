/*
Dados dois arrays com valores do tipo string, retorne um novo array contendo todos os valores que aparecem em apenas um dos arrays.

O array retornado deve estar ordenado alfabeticamente.
Testes:
Esperando :1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])deve retornar ["cherry"].
Esperando :2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])deve retornar ["cherry"].
Esperando :3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])deve retornar ["eight", "four", "six", "two"].
Esperando :4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"])deve retornar ["five", "one", "seven", "three"].
Esperando :5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])deve retornar ["freeCodeCamp", "rocks"].
*/

function arrayDiff(arr1, arr2) {
  var uniqueInArr1 = arr1.filter(item => !arr2.includes(item));
  var uniqueInArr2 = arr2.filter(item => !arr1.includes(item));
  return [...uniqueInArr1, ...uniqueInArr2].sort();
}

const resultado = arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]);

console.log(resultado); 