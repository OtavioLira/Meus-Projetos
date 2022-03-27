function carregar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("idade")
    var resposta = document.getElementById("resp")
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("ERRO-01: verifique os dados e tente novamente")
    }else {
       var fsex = document.getElementsByName("genero")
       var idade = ano - Number(fano.value)
       var genero = ""
       var img = document.createElement("img") //criar imagem dinamicamente
       img.setAttribute("id","foto") //coloca no img > ID="foto"
       if (fsex[0].checked){
           genero = "Homem"
           if(idade >=0 && idade < 10){
               //criança
               img.setAttribute("src","images/foto-bebe-m.png")
           } else if (idade < 21){
                //jovem
                img.setAttribute("src","images/foto-jovem-m.png")
           } else if (idade < 50){
               //adulto
               img.setAttribute("src","images/foto-adulto-m.png")
           }else{
               //idoso
               img.setAttribute("src","images/foto-idoso-m.png")
           }
       }else if (fsex[1].checked){
           genero = "Mulher"
           if(idade >=0 && idade < 10){
               //criança
               img.setAttribute("src","images/foto-bebe-f.png")
           } else if (idade < 21){
                //jovem
                img.setAttribute("src","images/foto-jovem-f.png")
           } else if (idade < 50){
               //adulto
               img.setAttribute("src","images/foto-adulto-f.png")
           }else{
               //idoso
               img.setAttribute("src","images/foto-idoso-f.png")
           }
       }
       resposta.style.textAlign = "center"
       resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       resposta.appendChild(img)
    }
    
   
}