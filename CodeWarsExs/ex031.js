function generateHashtag (str) {
        if (str.trim() === "") {
        return false;
    }

    const palavras = str.trim().split(/\s+/);
    var hash=["#"]
  for (let i=0;i<palavras.length;i++){
         if (palavras[i][0]==undefined){
        continue;
        }
        hash.push(palavras[i][0].toUpperCase())
        hash.push(palavras[i].slice(1).toLowerCase())
    }
    if (hash.join("").length>140){
      return false
    }
    return hash.join("").trim();
    }
  
/*A equipe de marketing está perdendo muito tempo digitando hashtags.
Vamos ajudá-los com o nosso Gerador de Hashtags!

A situação é a seguinte:

Deve começar com uma hashtag ( #).
Todas as palavras devem ter a primeira letra maiúscula e as restantes minúsculas.
Se o resultado final tiver mais de 140 caracteres, ele deverá retornar false.
Se a entrada ou o resultado for uma string vazia, deve retornar false.
Exemplos
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/