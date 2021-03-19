class NegociacaoService {

    obterNeogiacaoDaSemana(){

        let xhr = new XMLHttpRequest()
              xhr.open('GET', 'negociacoes/semana')
              xhr.send()
              xhr.onreadystatechange = () => {
                 /* status
                 0: requisição ainda não iniciada
                 1: conexão com o servidor estabelecida 
                 2: requisição recebida
                 3: processando requisição
                 4: requisição concluida e a resposta esta pronta */
                 if (xhr.readyState == 4 && xhr.status == 200) {
        
                    JSON.parse(xhr.responseText).map(objeto =>{
                       new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                       .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                    })
           
                 } else {
                 
                    console.log(xhr.responseText)
                    
                 }
              }
              xhr.send()

    }
}
