function sum (numbers) {
  let soma=0
  if (numbers===null){
  return 0
  }else{
    for (let i=0;i<numbers.length;i++){
      soma=soma+numbers[i]
    }
  }
  return soma
}
