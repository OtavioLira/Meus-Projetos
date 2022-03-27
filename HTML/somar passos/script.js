function Somar(){
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let resp = document.getElementById("resp")
    resp.innerHTML =  "" //resertar toda vez que apertar o botão


    //Alertar se um valor nao foi definido
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){ 
        resp.innerHTML = ("E necessario que tenha um valor em todas as caixas")
    }else { 
        let i  = Number(inicio.value) //Conrverter String para number
        let f = Number(fim.value) // Converter String para number
        let p = Number(passo.value) // Converte String para number
    //Caso o passo seja menor que zero
    if(p <= 0){
        window.alert("Passo invalido! Considerando PASSO = 1")
        p = 1
    }
    if(i < f){ //Contagem crescente
        for(let c = i; c <= f ; c += p){
            resp.innerHTML += `${c}&#128073; `
        }
    }else if (i > f){//Contagem decrescente
        for(let c = i; c >= f; c -=p){
            resp.innerHTML += `${c}&#128073`
        }
    }else {

    }
    resp.innerHTML += `\u{1F3C1}` //bandeira
    }

}
