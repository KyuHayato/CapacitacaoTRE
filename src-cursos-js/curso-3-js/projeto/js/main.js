import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefas.js'

const criarTarefa = function(evento){
    evento.preventDefault();
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo;
    input.value = '';

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa);
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click',criarTarefa)

