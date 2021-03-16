class NegociacaoController {
   constructor() {
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data')
      this._inputQuantidade = $('#quantidade')
      this._inputValor = $('#valor')
      
      let self = this
      this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
         get(target, prop, receiver) {
            if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop] == typeof (Function))) {
               return function () {

                  console.log(`interceptando ${prop}`)

                  Reflect.apply(target[prop], target, arguments)

                  self._negociacoesView.update(target)
               }
            } else {

               return Reflect.get(target, prop, receiver)
            }
         }
      })

      this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'))
      this._negociacoesView.update(this._listaNegociacoes)

      this._mensagem = new Mensagem()
      this._mensagemView = new MensagemView(document.querySelector('#mensagemView'))
      this._mensagemView.update(this._mensagem)

   }

   adiciona(event) {

      event.preventDefault();

      this._listaNegociacoes.adiciona(this._criaNegociacao())

      this._mensagem.texto = 'Negociação adicionada com sucesso!'
      this._mensagemView.update(this._mensagem)

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
      this._mensagemView.update(this._mensagem)
   }

}


