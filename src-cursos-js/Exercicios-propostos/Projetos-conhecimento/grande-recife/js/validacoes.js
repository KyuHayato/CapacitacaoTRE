function validarLogin() {
    document.querySelector("#")

}
function validarEsqueciSenha() {
    let mensagemInsira = ` <Span class="text-danger" id="cpf-invalido">Insira um CPF valido</Span>`
     let mensagemInvalido = `<Span class="text-danger">CPF Invalido ou inexistente</Span>`
     if (document.querySelector("#botao-cpf-esqueci").value == "") {
        document.querySelector("#teste").innerHTML = mensagemInsira
        return false
    }
    else if(document.querySelector("#botao-cpf-esqueci").value != "12345678"){
        document.querySelector("#teste").innerHTML = mensagemInvalido
        return false
    }
    
  return true
}
