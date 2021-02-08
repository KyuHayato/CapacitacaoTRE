let i = 2;
function inserirLinha() {
    i++;
    const Tr = document.createElement('tr');
    let Td = document.createElement('td');
    let conteudo = `<td>Linha${i} Coluna1</td> <td>Linha${i} Coluna2</td>`;
    Tr.appendChild(Td)
    Tr.innerHTML = conteudo;
    document.querySelector('#tabela').appendChild(Tr);
    console.log(Td)
    console.log(Tr)

}