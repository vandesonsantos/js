function clicar() {
    var data = new Date() //Cria a data atual.
    var anoatual = data.getFullYear() //Cria o ano atual co quatro digito.
    var nascimento = document.getElementById('nasc')
    var mensagem = document.getElementById('msg')

    if (nascimento.value.length == 0 || Number(nascimento.value > anoatual)) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)   
    } else {
        var sexo = document.getElementsByName('sex')
        var idade = anoatual - Number(nascimento.value)
        var gênero = ''
        var imagem = document.createElement('img') //Cria um elemento com a tag img.
        imagem.setAttribute('id', 'foto') //Cria um id com o nome foto.
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/crianca-m.png') //Coloca imagem com o JavaScript.
            } else if (idade < 21) {
                //JOVEM
                imagem.setAttribute('src', 'imagens/adolecente-m.png')
            } else if (idade < 60) {
                //ADULTO
                imagem.setAttribute('src', 'imagens/homem.png')
            } else {
                //IDOSO 
                imagem.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/crinaca-f.png')
            } else if (idade < 21) {
                //JOVEM
                imagem.setAttribute('src', 'imagens/adolecente-f.png')
            } else if (idade < 60) {
                //ADULTO
                imagem.setAttribute('src', 'imagens/mulher.png')
            } else {
                //IDOSO
                imagem.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        mensagem.style.textAlign = 'center' //Alinha o conteúdo ao centro.
        mensagem.innerHTML = `<strong> Detectamos ${gênero} com ${idade} anos. </strong>`
        mensagem.appendChild(imagem) //Manda aparecer a imagem criada no JavaScript.
    }
    
}