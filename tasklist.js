const talentos = [{
    tipo: "kkkk",
    "nome": "bbb",
    "introdução": "cccc",
    "pre-requisito": "ddddd",
    "custo": "eeeee",
    "beneficio": "ffff",
    "nota": "gggg",
    "livro-referencia": "hhhhh"
}]
const lista = document.querySelector('[data-list]')
const tarefa = document.createElement('li')
tarefa.classList.add('task')
const conteudo = `<p class="content">${talentos.tipo}</p>`
console.log(conteudo + 'Log aqui!')
tarefa.innerHTML = conteudo

lista.appendChild(tarefa)
const criarTarefa = (evento) => {

    evento.preventDefault() /* 1*/

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)



