let titulo = document.querySelector(".titulo");
titulo.textContent = "Estudos dirigidos de JavaScript";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i])
    let paciente = pacientes[i];
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    let imc;
    let tdImc = paciente.querySelector(".info-imc");
    //AJEITAR A VALIDAÇÃO
    if (validaPeso(peso) && validaAltura(altura) == true) {
        imc = calculaIMC(peso, altura);
        tdImc.textContent = imc;

    } else {
        if (validaPeso(peso) == false) {
            tdPeso.textContent = "peso invalido";
            paciente.classList.add("paciente-invalido");
        }
        if (validaAltura(altura) == false) {
            tdAltura.textContent = "altura invalida";
            paciente.classList.add("paciente-invalido");
        }
        console.log("dados invalidos")
        alert("dados invalidos")
        tdImc.textContent = "dados invalidos";

    }

}
titulo.addEventListener("click", function () {
    console.log("função anonima");
});

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function validaPeso(peso){
    if ((peso >= 200) || (peso < 1)){
        return false;
    } else{
        return true;
    } 
}
function validaAltura(altura){
    if ((altura > 2.30) || (altura < 0.1)){
        return false;
    } else {
        return true;
    }
}


