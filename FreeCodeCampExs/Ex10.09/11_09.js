function reverseSentence(sentence) {
    let rever
    let stc
    stc=sentence.trim().split(/\s+/)
    rever=stc.reverse().join(" ")
    
  return rever;
}
/*
Inverter frase
Dada uma sequência de palavras, retorne uma nova sequência com as palavras em ordem inversa. Por exemplo, a primeira palavra deve estar no final da sequência retornada, e a última palavra deve estar no início da sequência retornada.

Na sequência de caracteres fornecida, as palavras podem ser separadas por um ou mais espaços.
A sequência de caracteres retornada deve conter apenas um espaço entre as palavras.
*/