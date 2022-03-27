function carregar(){ //Executa quando o site carregar
    var agora = new Date()
    var msg = window.document.getElementById("horas")
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var img = window.document.getElementById("imagem")
    msg.innerHTML = `Agora são ${hora}:${minutos},` 
    if(hora >=0 && hora < 12){ //bom dia
       document.body.style.background = "cornflowerblue" //mudar o fundo
       msg.innerHTML += " Bom dia!"//mudar a mensagem
       img.src = "images/imagem-dia.jpeg"//mudar a imagem
    }else if(hora >=12 && hora < 18){ // boa tarde
        document.body.style.background = "rgb(243, 150, 44)"//mudar o fundo
        msg.innerHTML += " Boa tarde!"//mudar a mensagem
        img.src = "images/imagem-tarde.jpeg"//mudar a imagem
    }else { //boa noite
        document.body.style.background = "rgb(13, 18, 46)"//mudar o fundo
        msg.innerHTML += " Boa noite!"//mudar a mensagem
        img.src = "images/imagem-noite.jpeg"//mudar a imagem
    }
}