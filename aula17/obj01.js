let amigo = {nome:'josé',sexo:"M",peso: 85.4,
engordar(p=0){
    console.log(`engordou ${p}`)
    this.peso+= p
}
}
amigo.engordar(2)

