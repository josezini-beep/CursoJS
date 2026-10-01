function digPow(n, p){
  let soma = 0;
  for (let i = 0; i < n.toString().length; i++) {
    soma += Math.pow(parseInt(n.toString()[i]), p+i);
  }
  return soma % n === 0 ? soma / n : -1;
}