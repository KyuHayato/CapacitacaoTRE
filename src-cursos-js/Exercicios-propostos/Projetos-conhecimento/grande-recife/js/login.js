let labelCPF = document.querySelector('[data-label-cpf-login]')
let botaoAlternado = document.querySelector('[data-label-botaoAlternado-login]')
let inputSUS = document.querySelector('[botao-cpf-login]')
//let inputSUS1 = document.querySelector('[botao-cpf-login1]')
function entrarComNSus() {
    if(labelCPF.innerText == "CPF (APENAS NÚMEROS)*"){

        labelCPF.innerText = "CNS (APENAS NÚMEROS)*"
        botaoAlternado.innerText = "Clique aqui para entrar com o CPF";
        inputSUS.setAttribute("data-mask","000 0000 0000 0000")
  
    } else{
        labelCPF.innerText = "CPF (APENAS NÚMEROS)*"
        botaoAlternado.innerText = "Clique aqui para entrar com o Nº do Cartão do SUS";
        inputSUS.setAttribute("data-mask","000.000.000-00")
    }
    inputSUS.masked('000 0000 0000 0000')
    console.log(inputSUS)
}