function areYouPlayingBanjo(name) {
  if(name[0]=="R" || name[0]=="r"){
  return `${name} plays banjo`
  }
  return `${name} does not play banjo`;
}

/*
Crie uma função que responda à pergunta "Você toca banjo?".
Se o seu nome começar com a letra "R" ou com "r" minúsculo, você toca banjo!

A função recebe um nome como único argumento e retorna uma das seguintes strings:

name + " plays banjo" 
name + " does not play banjo"
Os nomes fornecidos são sempre sequências de caracteres válidas.
*/