function validarLogin() {
    let divCampo1 = document.querySelector("[data-mensagem-erro]")
    let divCampo2 = document.querySelector("[data-mensagem-erro-senha]")
    let inputCpfCns = document.querySelector("[data-input-cpf-cns-login]")
    let inputSenha = document.querySelector("[data-input-password-login]")
    let mensagemErro = `<span class="text-danger h6 mb-4">Login ou senha inválida</span>`
    let mensagemErro2 = `<span class="text-danger h6">Login ou senha inválida</span>`
    
    if (inputCpfCns.value == "" && inputCpfCns.value != "12345") {
        divCampo1.innerHTML = mensagemErro  
    } else{
        return alert("logando")
    }
    if(inputSenha.value == "" && inputSenha.value != "123" ){
        divCampo2.innerHTML = mensagemErro2
    }else{
        return alert("logando")
    }
}
function validarEsqueciSenha() {
    let mensagemInsira = ` <Span class="text-danger h6" id="cpf-invalido">Insira um CPF valido</Span>`
    let mensagemInvalido = `<Span class="text-danger h6">CPF Invalido ou inexistente</Span>`
    if (document.querySelector("#botao-cpf-esqueci").value == "") {
        document.querySelector("#mensagemInvalida").innerHTML = mensagemInsira
        return false
    }
    else if (document.querySelector("#botao-cpf-esqueci").value != "12345678") {
        document.querySelector("#mensagemInvalida").innerHTML = mensagemInvalido
        return false
    }

    return alert("email enviado")
}

/* function validacaoTeste(){
    if(document.querySelector("#teste").style.display == "none"){
        document.querySelector("#teste").style.display = "block"
        alert("entrou")
    } else{
        document.querySelector("#teste").style.display = "none"
        alert("else")
    }
}
 */

