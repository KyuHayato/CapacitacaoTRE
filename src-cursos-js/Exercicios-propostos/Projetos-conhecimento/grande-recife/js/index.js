
    var teste = document.getElementsByName('inlineRadioOptions')
    teste
    
    for(let i =0;i < teste.length;i++){
        teste[i].addEventListener('click', function(){
            for(var i = 0 in teste){
                if(teste[i].checked)
                    alert("consegui")
               }    
        
        })
    }
    
  
   
