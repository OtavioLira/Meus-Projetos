function gerar(){
    let numero = document.getElementById("txtNumero")
    let tab = document.getElementById("tabuada")

    if(numero.value.length <= 0 ){
        window.alert("Digite algum valor na caixa 'Número'")
    }else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = "" //limpar tela
        while(c <= 10){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // value="tab1"
            tab.appendChild(item)
            c++
        }
    }

}