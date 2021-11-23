function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 23
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        imagem.src = "imagens/manha.png"
        document.body.style.background = 'var(--manha)'

    } else if (hora >=12 && hora <= 18) {
        //BOA TARDE!
        imagem.src = "imagens/tarde.png"
        document.body.style.background = 'var(--tarde)'

    } else {
        //BOA NOITE!
        imagem.src = "imagens/noite.png"
        document.body.style.background = 'var(--noite)'
    }
}