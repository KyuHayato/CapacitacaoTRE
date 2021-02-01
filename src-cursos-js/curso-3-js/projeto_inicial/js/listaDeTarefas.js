(function(){
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

const BotaoConclui = function(){
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluiTarefa)
    return botaoConclui;
}

const concluiTarefa = function(evento){
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done')
}

const BotaoDeleta = function(){
    botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';
    
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
    
}
const deletarTarefa = function(evento){
    const botaoDeleta =evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    
    return botaoDeleta;
}

})()