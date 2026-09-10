var summation = function (num) {
let soma = 0
  for(i=0;i<num;i++){
  soma=(soma+(num-i))
}
return soma
}
/*Orientação
Soma
Escreva um programa que calcule a soma de todos os números de 1 a num (inclusive). O número será sempre um inteiro positivo maior que 0. Sua função só precisa retornar o resultado; o que está entre parênteses no exemplo abaixo é como chegar a esse resultado e não faz parte do programa. Veja os testes de exemplo.

Por exemplo (Entrada -> Saída) :

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/