function obterAtributos () {
    const ancora = document.querySelector('#tre');
    
    let lista = document.createElement('ul');
    let item = [];
    for(let i = 0; i < 5; i++){
       item[i] = document.createElement('li');
    }

    item[0].textContent = ancora.getAttribute('href');
    item[1].textContent = ancora.getAttribute('hreflang');
    item[2].textContent = ancora.getAttribute('rel');
    item[3].textContent = ancora.getAttribute('target');
    item[4].textContent = ancora.getAttribute('type');

    for(let i = 0;i < item.length; i++ ){
        lista.appendChild(item[i]);
    }
    
    document.querySelector('#lista-atributos').appendChild(lista)
    console.log(lista)
    console.log(ancora.attributes.type)
}



