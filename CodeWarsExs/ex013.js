function findNextSquare(sq) {
    let texto = Math.sqrt(sq);
if (Number.isInteger(texto)) {
    var sqr2 = ((texto+1)*(texto+1))
}else {
  return -1; 
}
return (sqr2) 
texto
}
/*
Você provavelmente conhece alguns quadrados perfeitos bem grandes. Mas e o PRÓXIMO?

Complete o findNextSquaremétodo que encontra o próximo quadrado perfeito inteiro após o valor passado como parâmetro. Lembre-se de que um quadrado perfeito inteiro é um inteiro n tal que sqrt(n) também é um inteiro.

Se o argumento em si não for um quadrado perfeito, retorne -1um valor vazio, como `0` Noneou `1` null, dependendo da sua linguagem. Você pode assumir que o argumento é não negativo.

Exemplos (Entrada --> Saída)
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
*/