var v1=1
var v2=0
var i=0
 function fibo(n){
    if ( i===n){
        v1=1
        v2=0
        i=0
        return 0
    }  
    soma=v1+v2
    v1=v2
    v2=soma
    i++
    return soma+fibo(n)
}       
console.log(fibo(5))
