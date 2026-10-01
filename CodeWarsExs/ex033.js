function duplicateEncode(word){
    const palavra = [];
    for (let i = 0; i < word.length; i++) {
    let COUNT = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i].toLowerCase() === word[j].toLowerCase()) {
        COUNT++;
      }

    }
    if (COUNT > 1) {
      palavra.push(')');
    }else {
      palavra.push('(');
    }
    }

    return palavra.join('');
}