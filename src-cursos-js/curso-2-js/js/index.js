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

    if (peso <= 200 && peso > 1 && (altura < 2.30) && (altura > 0.1)) {
        imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);

    } else {
        if ((peso >= 200) || (peso < 1)) {
            tdPeso.textContent = "peso invalido";
            paciente.classList.add("paciente-invalido");
        }
        if ((altura > 2.30) || (altura < 0.1)) {
            tdAltura.textContent = "altura invalida";
            paciente.classList.add("paciente-invalido");
        }
        console.log("dados invalidos")
        alert("dados invalidos")
        tdImc.textContent = "dados invalidos";
        
    }
}






