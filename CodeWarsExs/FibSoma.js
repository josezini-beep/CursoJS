function fibo(n) {
    if (n <= 1) {
        return n
    }
    return fibo(n - 1) + fibo(n - 2)
}
function somafib(n){
    if (fibo(n)<=0){
        return 0
    }
    return fibo(n)+ somafib(n-1)
}
console.log(somafib(5))

