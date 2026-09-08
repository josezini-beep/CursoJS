var agora = new Date()
var hora = agora.getHours()
console.log (`agora são exatamente ${hora} hora`)
    if (hora>=6 && hora<12) {
    console.log(`bom dia`)
    } else if (hora>=12 && hora <= 18) {
        console.log('boa tarde')
     }
    else if (hora>18 && hora<=23) {
        console.log('boa noite')
    } else if (hora<6){
        console.log('Boa madrugada')
    }