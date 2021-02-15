import {removeDatasRepetidas} from "../service/data.js"
import { criaData } from "./criaData.js"

export const carregaTarefa = function(){
    const lista = document.querySelector('[data-list]')
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []
    lista.innerHTML = ''
    const dataUnicas = removeDatasRepetidas(tarefasCadastradas)

    dataUnicas.forEach(dia => {
       
        lista.appendChild(criaData(dia))
    })
}