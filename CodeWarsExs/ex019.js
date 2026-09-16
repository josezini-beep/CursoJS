function grow(x){
    var mult=1
    for(let i = 0;i<x.length;i++){
        mult=mult*x[i]
    }
return mult
}
/*
Dado um vetor não vazio de inteiros, retorne o resultado da multiplicação dos valores em ordem. Exemplo:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
FundamentosMatrizes
*/