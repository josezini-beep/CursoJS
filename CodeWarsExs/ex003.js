function basicOp(operation, value1, value2){
let soma;
let men;
let div;
let mult;
switch (operation){
case "+":
soma=(value1+value2)
return soma
break

case "-":
men=(value1-value2)
return men
break


case "*":
mult=(value1*value2)
return mult
break


case "/":
div=(value1/value2)
return div
break

default:
break
}
  return 0;
}

/*
Sua tarefa é criar uma função que execute quatro operações matemáticas básicas.

A função deve receber três argumentos: operação (string/caractere), valor1 (número) e valor2 (número).
A função deve retornar um resultado numérico após a aplicação da operação escolhida.
*/