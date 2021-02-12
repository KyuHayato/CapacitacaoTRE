let linhas;
let colunas;
function enviarDados() {

   linhas = Number(document.querySelector('#linhas').value)
   colunas = Number(document.querySelector('#colunas').value)
   return this.linhas, this.colunas
}


function criarTabela() {
   const linhas = 3
   const colunas = 3
  


   for (let i = 0; i < linhas; i++) {
      for (let j = 0; j < colunas; j++) {
         const Tr = document.createElement('tr');
         let conteudo = `<td>Linha${i+=1} Coluna${j+=1}</td> <td>Linha${i} Coluna${j+=1}</td>`;
         Tr.innerHTML = conteudo;
         document.querySelector('.celula').appendChild(Tr);


         /*          linhaConteudo[i] = document.createElement('td')
         linhaConteudo[i].textContent = `Linha ${i}`;
         colunasConteudo[j] = document.createElement('td')
         colunasConteudo[j].textContent = `Coluna ${j}`;
         document.querySelector('.celula').appendChild(linhaConteudo)
         document.querySelector('.celula').appendChild(colunasConteudo)
 */      }
     
   }
}
//Não estou conseguindo implementar a lógica de duplicar colunas e de resgatar os valores de linhas e colunas da primeira função





































/* let flagP;
let nLinhas;
let nColunas;
function criarTabela() {

   if (!flagP) {
      recebeParametros();

   } else {
      console.log(flagP)
      const tabela = document.createElement('table');
      const linhas = []
      const colunas = []
      for (let i = 0; i < nLinhas; i++) {

         linhas[i] = document.createElement('tr');
         linhas[i].textContent = `Linha ${i}`
      }

      for (let i = 0; i < nLinhas; i++) {

         colunas[i] = document.createElement('td');
         colunas[i].textContent = `Coluna ${i}`
      }
      linhas.appendChild(colunas)
      tabela.appendChild(linhas)
      document.querySelector('body').appendChild(tabela)
   }

}

function recebeParametros() {
   let form = document.createElement('form');
   const inputLinhas = document.createElement('input');
   const inputColunas = document.createElement('input');
   const botaoSub = document.createElement('input');

   form.setAttribute('id', 'formInput');
   botaoSub.setAttribute('type', 'submit');
   inputLinhas.setAttribute('type', 'text');
   inputLinhas.setAttribute('id', 'teste');
   inputColunas.setAttribute('type', 'text');

   form.appendChild(inputLinhas);
   form.appendChild(inputColunas);
   form.appendChild(botaoSub);

   document.querySelector('body').appendChild(form)

   botaoSub.addEventListener('click', function () {
      nLinha = Number(inputLinhas.value)
      nColunas = Number(inputColunas.value)
   })

   flagP = true;
   console.log(form)
   console.log(inputColunas)
   console.log(inputLinhas)
   console.log(inputLinhas.textContent)
}


 */