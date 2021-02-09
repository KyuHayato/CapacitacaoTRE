function criarTabela() {
    const labelLinhas = document.createElement('label');
    const labelColunas = document.createElement('label');
    let botaoLinhas = document.createElement('input');
    let botaoColunas = document.createElement('input');


    labelLinhas.setAttribute("for", "btnLinha");
    labelLinhas.textContent = "Linhas:";
    labelColunas.setAttribute("for", "btnColuna");
    labelColunas.textContent = "Colunas:";

    labelLinhas.appendChild(botaoLinhas);
    labelColunas.appendChild(botaoColunas);

    botaoLinhas.setAttribute("id", "btnLinha");
    botaoLinhas.setAttribute("type", "text");
    botaoColunas.setAttribute("id", "btnColuna");
    botaoColunas.setAttribute("type", "text");

    document.querySelector('#tabela').appendChild(labelLinhas);
    document.querySelector('#tabela').appendChild(labelColunas);

    console.log(labelLinhas)
    console.log(labelColunas)

}


/* const Tr = document.createElement('tr');
   let Td = document.createElement('td');
   let conteudo = `<td>Linha${i} Coluna1</td> <td>Linha${i} Coluna2</td>`;
   Tr.appendChild(Td)
   Tr.innerHTML = conteudo;
   document.querySelector('#tabela').appendChild(Tr);
   console.log(Td)
   console.log(Tr) */


//terminar 