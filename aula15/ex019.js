let car=[1,2,3]
car[3]=4
car.push(5)
car.sort()
console.log(`[ ${car}] \nNosso vetor é ${car} e tem ${car.length} caracteres`)

for (let i=0;i<car.length;i++){
    console.log(`${car[i]}`)
}