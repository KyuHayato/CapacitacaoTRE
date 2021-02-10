function obterOpcoes() {

    const options = document.querySelectorAll('option')
    alert("Lista de elementos:")
    for (let i = 0; i < options.length; i++) {
        alert(options[i].textContent);
    }
    alert("Quantidade de elementos: " + options.length)
}