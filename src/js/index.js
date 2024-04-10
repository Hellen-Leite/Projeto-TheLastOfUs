const botoesCarrossel = document.querySelectorAll('.botao')
const imagens= document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indicie)=>{
    botao.addEventListener('click', ()=>{

        desativarBotaoSelecionado()
      
        selecionarBotaoCaarrossel(botao)

        esconderImagemAtiva()

        mostrarImagemDeFundo(indicie)
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')

    botaoSelecionado.classList.toggle('selecionado')
}
function selecionarBotaoCaarrossel(botao) {
    botao.classList.toggle('selecionado')
}
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.toggle('ativa')
}
function mostrarImagemDeFundo(indicie) {
    imagens[indicie].classList.toggle('ativa')
}

