const form = document.getElementById('form-atividade')

const imgAprovado = "<img src='./images/aprovado.png' alt='Emoji celebrando'/>"
const imgReprovado = "<img src='./images/reprovado.png' alt='Emoji decepcionado'/>"

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notas = []
const atividades = []

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizar_media()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td> ${inputNomeAtividade.value}</td>`
    linha += `<td> ${inputNotaAtividade.value}</td>`
    linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td></tr>`

    const corpoTabela  = document.querySelector('tbody')
    corpoTabela.innerHTML += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizar_media(){
    let soma = 0

    for(let i =0; i<notas.length; i++){
        soma += notas[i]
    }

    let media = soma / notas.length
    document.getElementById('media').innerHTML = media
    document.getElementById('resultado').innerHTML = media >= 7 ? spanAprovado : spanReprovado
}