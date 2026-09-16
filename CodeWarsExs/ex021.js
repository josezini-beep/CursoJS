function squareSum(numbers){
  let Q=[] 
  let soma=0
  for(let i=0;i<numbers.length;i++){
    Q.push(numbers[i]*numbers[i])
    soma = soma+Q[i]
  }
  return soma
}
/*
Complete a função de soma de quadrados para que ela eleve ao quadrado cada número passado como argumento e, em seguida, some os resultados.

Por exemplo, pois [1, 2, 2]deveria retornar 9porque
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.
 */
