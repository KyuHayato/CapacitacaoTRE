class NegociacaoController {
   //consertar bug
   constructor() {
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data')
      this._inputQuantidade = $('#quantidade')
      this._inputValor = $('#valor')


      this._listaNegociacoes = ProxyFactory.create(new ListaNegociacoes(), ['adiciona', 'esvazia'], (model) => {
         this._negociacoesView.update(model)
      })

      this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'))
      this._negociacoesView.update(this._listaNegociacoes)

      this._mensagem = new ProxyFactory.create(new Mensagem(), ['texto'], (model) => {
         this._mensagemView.update(model)
      });

      this._mensagemView = new MensagemView(document.querySelector('#mensagemView'))
      this._mensagemView.update(this._mensagem);

   }

   adiciona(event) {

      event.preventDefault();
      this._listaNegociacoes.adiciona(this._criaNegociacao())
      this._mensagem.texto = 'Negociação adicionada com sucesso!'
      this._limpaFormulario()

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



