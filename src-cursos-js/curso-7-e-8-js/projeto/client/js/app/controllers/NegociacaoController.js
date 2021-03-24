class NegociacaoController {
   //consertar bug
   constructor() {
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data')
      this._inputQuantidade = $('#quantidade')
      this._inputValor = $('#valor')

      this._listaNegociacoes = new Bind(new ListaNegociacoes(),
         new NegociacoesView(document.querySelector('#negociacoesView')), 'adiciona', 'esvazia')

      this._mensagem = new Bind(new Mensagem(),
         new MensagemView(document.querySelector('#mensagemView')), 'texto')

   }

   adiciona(event) {

      event.preventDefault();
      this._listaNegociacoes.adiciona(this._criaNegociacao())
      this._mensagem.texto = 'Negociação adicionada com sucesso!'
      this._limpaFormulario()

   }
   importaNegociacoes() {
      let service = new NegociacaoService();
      service.obterNegociacaoDaSemana((erro, negociacoes) => {
         if (erro) {
            this._mensagem.texto = erro
            return
         }
         negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
         service.obterNegociacaoDaSemanaAnterior((erro, negociacoes) => {
            if (erro) {
               this._mensagem.texto = erro
               return
            }
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))

            service.obterNegociacaoDaSemanaRetrasada((erro, negociacoes) => {
               if (erro) {
                  this._mensagem.texto = erro
                  return
               }
               negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))


            })

         })

      })
   }
   _criaNegociacao() {

      return new Negociacao(
         DataHelper.textoParaData(this._inputData.value),
         this._inputQuantidade.value,
         this._inputValor.value)
   }


   _limpaFormulario() {
      this._inputData.value = ''
      this._inputQuantidade.value = 1
      this._inputValor.value = 0.0

      this._inputData.focus()

   }
   apaga() {
      this._listaNegociacoes.esvazia()

      this._mensagem.texto = 'Negociações apagadas com sucesso!'

   }

}



