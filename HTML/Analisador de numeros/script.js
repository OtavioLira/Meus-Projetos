var numeroTexto = document.getElementById("inpNumber")
var lista = document.getElementById("seLista")
var resp = document.getElementById("resposta")
var numeroVetor = []

function Adicionar() { 
    if(numeroTexto.value.length < 0){ // não deixar sem valor
        window.alert("[ERROR-0001] \nDigite algum valor")
    }else if (numeroTexto.value < 1 || numeroTexto.value > 100) { // min 1 max 100
        window.alert("[ERROR-0003] \nO valor precisa estar entre 1 e 100")
    }else if(numeroVetor[0] == undefined){ // se o vetor estiver sem valor, ele adiciona o valor
        numeroVetor.push(numeroTexto.value)
        let item = document.createElement("option")
        item.text = `O valor ${numeroTexto.value} foi adicionado`
        item.value = numeroTexto.value
        lista.appendChild(item)
    }else if (numeroVetor.indexOf(numeroTexto.value) == -1){ // Procurar numeros repetidos
        numeroVetor.push(numeroTexto.value)
        let item = document.createElement("option")
        item.text = `O valor ${numeroTexto.value} foi adicionado`
        item.value = numeroTexto.value
        lista.appendChild(item)
    }else {
        window.alert("[ERROR-0004] \nNão pode conter numeros repetidos")
    }

    numeroTexto.value = ""
    numeroTexto.focus() //focar no input
}

function Finalizar(){
    if(numeroVetor.length <=0){//verificar valores
        window.alert("[ERROR-0002] \nDigite algum valor antes de finalizar")
    }else { // limpar a tela antes de iniciar
        resp.innerHTML = ""
    }  
    for(var i = 1; i < numeroVetor.length; i++){ 
        var maior = Math.max(numeroVetor[0],numeroVetor[i])//Procurar o maior valor
        var menor = Math.min(numeroVetor[0],numeroVetor[i])//Procurar o menor valor
        var contar = Number(numeroVetor[0]) + Number(numeroVetor[i])
        var soma
        if (soma == undefined) {
            soma = contar
        }else{
            soma += Number(numeroVetor[i])
        }
    }
    let media = soma / numeroVetor.length
    resp.innerHTML = `Ao todo, temos ${numeroVetor.length} números cadastrados <br>` 
    + `O maior valor informado foi ${maior} <br>`
    + `O menor valor informado foi ${menor} <br>`
    + `Somando todos os valores, temos ${soma} <br>`
    + `A média dos valores digitados é ${media} <br>`
}