function mudaCor(){
    const paragrafo = document.querySelector('[data-paragrafo]');
    document.querySelector('[data-button]').addEventListener('click',paragrafo.classList.add('paragrafo'))
    
}