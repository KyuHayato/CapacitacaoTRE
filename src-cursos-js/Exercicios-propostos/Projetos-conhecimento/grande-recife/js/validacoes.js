function validarLogin() {
    let divCampo1 = document.querySelector("[data-mensagem-erro]")
    let divCampo2 = document.querySelector("[data-mensagem-erro-senha]")
    let inputCpfCns = document.querySelector("[data-input-cpf-cns-login]")
    let inputSenha = document.querySelector("[data-input-password-login]")
    let mensagemErro = `<span class="text-danger h6 mb-4">Login ou senha inváli'da</span>`
    let mensagemErro2 = `<span class="text-danger h6">Login ou senha inválida</span>`

    if (inputCpfCns.value == "" && inputCpfCns.value != "12345") {
        divCampo1.innerHTML = mensagemErro
    } else {
        return alert("logando")
    }
    if (inputSenha.value == "" && inputSenha.value != "123") {
        divCampo2.innerHTML = mensagemErro2
    } else {
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

function validacaoTeste() {


    if (document.querySelector("#input-nome").value == "") {
        document.querySelector("#mensagemErro-nome").style.display = "block"
        //document.querySelector("#input-nome").focus()

    } else {
        document.querySelector("#mensagemErro-nome").style.display = "none"
    }

    if (document.querySelector("#input-cpf").value == "") {
        document.querySelector("#mensagemErro-cpf").style.display = "block"
        //document.querySelector("#input-cpf").focus()

    } else if (document.querySelector("#input-cpf").value != '123.456.789-12') {
        document.querySelector("#mensagemErro-cpf-Nvalido").style.display = "block"
       // document.querySelector("#input-cpf").focus
    } else {
        document.querySelector("#mensagemErro-cpf").style.display = "none"
        document.querySelector("#mensagemErro-cpf-Nvalido").style.display = "none"
    }


    if (document.querySelector("#sus").value == "") {
        document.querySelector("#mensagemErro-CNS-branco").style.display = "block"
       // document.querySelector("#sus").focus()
    } else {
        document.querySelector("#mensagemErro-CNS-branco").style.display = "none"
    }
    if (document.querySelector("#nome-mae").value == "") {
        document.querySelector("#mensagemErro-nome-mae").style.display = "block"
        //document.querySelector("#nome-mae").focus()
    }else{
        document.querySelector("#mensagemErro-nome-mae").style.display = "none"
    }
    if(document.querySelector("#numtelefone").value == ""){
        document.querySelector("#mensagemErro-telefone").style.display = "block"
    }else{
        document.querySelector("#mensagemErro-telefone").style.display = "none"
    }
   
    if(document.querySelector("#inputGroupSelect03").value == ""){
        document.querySelector("#mensagemErro-sexo").style.display = "block"

    }else{
        document.querySelector("#mensagemErro-sexo").style.display = "none"
     
    }

    if(document.querySelector("#numtelefone").value == ""){
        document.querySelector("#mensagemErro-telefone").style.display = "block"
    }else{
        document.querySelector("#mensagemErro-telefone").style.display = "none"
    }
}

function validaCPF(cpf) {
    exp = /\d{3}\.\d{3}\.\d{3}\-\d{2}/
    if (cpf.value == "") {
        document.querySelector("#mensagemErro-cpf").style.display = "block"
        cpf.focus()
        //document.querySelector("#input-cpf").focus()
    }else{
        document.querySelector("#mensagemErro-cpf").style.display = "none" 
    } 
    if(!exp.teste(cpf.value) && cpf.value != ""){
        document.querySelector("#mensagemErro-cpf-Nvalido").style.display = "block"
    }else{
        document.querySelector("#mensagemErro-cpf-Nvalido").style.display = "none" 
    }
    if (cpf.value != '123.456.789-12') {
        document.querySelector("#mensagemErro-cpf-Nvalido").style.display = "block"
    }
    document.querySelector("#mensagemErro-cpf-Nvalido").style.display = "none"
}

function ValidaTelefone(tel) {
    exp = /\(\d{2}\)\ \d{1}\ \d{4}\-\d{4}/
    if(tel.value == ""){
        document.querySelector("#mensagemErro-telefone").style.display = "block"
    }else{
        document.querySelector("#mensagemErro-telefone").style.display = "none"
    }
    if (!exp.test(tel.value)) {
        document.querySelector("#mensagemErro-telefone-incompleto").style.display = "block"
        tel.focus();
    } else {
        document.querySelector("#mensagemErro-telefone-incompleto").style.display = "none"
    }
}
//terminar validação da data de nasc
function validaDataNasc() {
    exp = /\d{2}\/\d{2}\/\d{4}/
    let data = document.querySelector("#data-Nasc").value; // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    let data_array = data.split("-"); // quebra a data em array
    console.log(data)
    console.log(data_array)
    if(data == ""){
        document.querySelector("#mensagemErro-dataNasc").style.display = "block"
    }else{
        document.querySelector("#mensagemErro-dataNasc").style.display = "none"
    }
    if(!exp.test(document.querySelector("#data-Nasc").value)){
        document.querySelector("#mensagemErro-dataNasc-invalido").style.display = "block" 
    }else{
        document.querySelector("#mensagemErro-dataNasc-invalido").style.display = "none" 
    }

    let hoje = new Date();
    console.log(hoje.getFullYear())
    if (data_array[2] == hoje.getFullYear()) {
        document.querySelector("#mensagemErro-dataNasc-invalido").style.display = "block"
    }else{
        document.querySelector("#mensagemErro-dataNasc-invalido").style.display = "none"
    }
    
}
function ValidaCep(cep) {
    exp = /\d{2}\.\d{3}\-\d{3}/
    if (!exp.test(cep.value)) {
        document.querySelector("#mensagemErro-cep").style.display = "block"
        cep.focus();
    } else {
        document.querySelector("#mensagemErro-cep").style.display = "none"
    }
}


function ValidaEmail(email) {
    let exp = /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/
    if (email.value == '') {
        document.querySelector("#mensagemErro-email").style.display = "block"
        email.focus();
        return false;
    } else {
        document.querySelector("#mensagemErro-email").style.display = "none"
    }
    if (!exp.test(email.value)) {

        document.querySelector("#mensagemErro-email-invalido").style.display = "block"
        email.focus();
        return false;
    } else {
        document.querySelector("#mensagemErro-email-invalido").style.display = "none"
    }

}
function validacaoCartaoSUS(sus) {
    //ajustar a saida 
    exp = /\d{3}\''\d{4}\''\d{4}\''\d{4}/
    if (sus.value == "") {
        document.querySelector("#mensagemErro-CNS-branco").style.display = "block"
        sus.focus()
    } else {
        document.querySelector("#mensagemErro-CNS-branco").style.display = "none"
    }
    if (!exp.test(sus.value)) {
        document.querySelector("#mensagemErro-CNS-Nvalido").style.display = "block"
        sus.focus()
    } else {
        document.querySelector("#mensagemErro-CNS-Nvalido").style.display = "none"
    }
}
//AJUSTAR validacao
function validaNum(num) {
    if (document.querySelector("#num") != typeof (Number)) {
        alert(typeof (document.querySelector("#num")))
    }
}



