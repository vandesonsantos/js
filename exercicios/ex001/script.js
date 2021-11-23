function carregar() {
    var mensagem = window.document.getElementById('msg') 
    var imagemhtml = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    mensagem.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        imagemhtml.src = "imagens/manha.png"
        document.body.style.background = 'var(--manha)'

    } else if (hora >=12 && hora < 18) {
        //BOA TARDE!
        imagemhtml.src = "imagens/tarde.png"
        document.body.style.background = 'var(--tarde)'

    } else {
        //BOA NOITE!
        imagemhtml.src = "imagens/noite.png"
        document.body.style.background = 'var(--noite)'
    }
}