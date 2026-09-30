const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 if (distanceToPump/fuelLeft<=mpg) {
  return true
 }else{
  return false 
}
};

/*Você estava acampando com seus amigos longe de casa, mas quando chegou a hora de voltar, percebeu que seu combustível estava acabando e o posto de gasolina mais próximo ficava 50a quilômetros de distância! Você sabe que, em média, seu carro faz cerca de [número] 25quilômetros por litro. Ainda restam [número] 2litros.

Considerando esses fatores, escreva uma função que indique se é possível chegar à bomba ou não.

A função deve retornar truese for possível e, falsecaso contrário, deve ser negada.
*/
