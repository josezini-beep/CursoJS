function carregar(){
var msg = window.document.getElementById('msg')
var msg2 = window.document.getElementById('msg2')
var img = window.document.getElementById('img')
var data = new Date()
var hora = 4
msg.innerHTML=`Agora são ${hora} horas`
if (hora >=6 && hora <12){
    img.src="foto-manhã.jpg"
    document.body.style.background = 'yellow'
    msg2.innerHTML = "Bom dia"
} else if (hora >=12 && hora <18) {
    img.src="foto-tarde.jpg"
    document.body.style.background = 'orange'
    msg2.innerHTML = "Boa tarde"
} else if (hora >=18 && hora <24) {
    img.src="foto-noite.jpg"
    document.body.style.background = '#024bb3'
    msg2.innerHTML = "boa noite"
} else if (hora >=0 && hora <6) {
    img.src="foto-madrugada.jpg"
    document.body.style.background = '#020241'
    msg2.innerHTML = "Boa madrugada"
}
}