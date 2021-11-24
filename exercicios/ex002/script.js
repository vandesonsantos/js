function clicar() {
    window.alert('funcionaou')
    var anos = window.document.getElementById('nasc')
    var mensagem = window.document.getElementById('msg')
    var imagemhtml = window.document.getElementById('imagem')
    var idade = (2021 - anos)

    
    if (idade <= 10) {
        mensagem.innerHTML = `Sua idade é ${idade} anos!`
        imagemhtml.src = "imagens/crianca-m.png"

    }
    

}