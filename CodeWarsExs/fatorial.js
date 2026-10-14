function fatorial(n){
    var resultado=1
    for (let i=n; i>0;i--){
    resultado*=i
    }
    console.log(resultado)
    return resultado
}

fatorial(0)

    
function fat(n){
    if(n===0||n===1){
        return 1
    }   
    resultado*fat(n--)
}
fat(9)