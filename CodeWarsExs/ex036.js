  function mat(n){
    if (n.length == 2){
      return (n[0][0] * n[1][1]) - (n[0][1] * n[1][0]);
    }
    for (let i = n.length; i >= 0; i--){ 
        resultado = n.filter((valor, indice) => indice !== i)
      for (let j = n[0][0].length; j >= 0; j--){
         resultado = n.filter((valor, indice) => indice !== j)
    }
  }
  return mat(resultado)
}


function determinant(m) {

  
  if (m.length === 1) {
    return m[0][0];
  }

  if (m.length === 2) {
    return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
  }
  return (mat(m))
}
console.log(determinant([ [1,2,6,4], [3,5,4,8],[3,7,4,9] ]))