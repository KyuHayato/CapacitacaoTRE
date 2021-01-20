	let titulo = document.querySelector(".titulo");
    titulo.textContent = "Estudos dirigidos de JavaScript";
    
    let paciente = document.querySelector("#primeiro-paciente");
    
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura  = tdAltura.textContent;

    let imc = peso / (altura * altura)
    
    let tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc;
    
