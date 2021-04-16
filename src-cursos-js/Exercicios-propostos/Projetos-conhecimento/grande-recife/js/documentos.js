
    let radioGrupoPrioritario= document.getElementsByName('inlineRadioOptions')
    let abaUpload = `
    <h1 class="font-weight-bolder linha-estilo-3 mt-4 mb-3">DOCUMENTOS</h1>
    <div class="row justify-content-around">
    <div class="col-6">
        <div class="card mb-4">
            <div class="card-body text-center">
                <p class="card-title">COMPROVANTE DE RESIDÊNCIA</p>
                <input type="file" class="btn btn-success" value="SELECIONE O ARQUIVO"></input>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card mb-4 mr-3">
            <div class="card-body text-center">
                <p class="card-title">DOCUMENTO DE IDENTIFICAÇÃO</p>
                <input type="file" class="btn btn-success" value="SELECIONE O ARQUIVO"></input>
            </div>
        </div>
    </div>
</div>`

    let containerDocumento = document.querySelector('[data-documentos]')
    for(let i =0;i < radioGrupoPrioritario.length;i++){
        radioGrupoPrioritario[i].addEventListener('click', function(){
            for(var i = 0 in radioGrupoPrioritario){
                if(radioGrupoPrioritario[i].checked)
                    containerDocumento.innerHTML = abaUpload
               }    
        
        })
    }
    
  
   
