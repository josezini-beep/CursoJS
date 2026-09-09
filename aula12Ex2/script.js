function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML=`agora são ${hora} horas`
if (hora >=6 && hora <12){
    img.src="foto-manhã.jpg"
    document.body.style.background = 'yellow'

} else if (hora >=12 && hora <18) {
    img.src="foto-tarde.jpg"
    document.body.style.background = 'orange'
    
} else if (hora >=18 && hora <24) {
    img.src="foto-noite.jpg"
    document.body.style.background = 'blue'
} else if (hora >=0 && hora >6) {
    img.src="foto-madrugada.jpg"
    document.body.style.background = '#191970'
    
}
}