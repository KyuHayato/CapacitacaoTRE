	let titulo = document.querySelector(".titulo");
    titulo.textContent = "Estudos dirigidos de JavaScript";
    
    let paciente = document.querySelector("#primeiro-paciente");
    
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura  = tdAltura.textContent;

    console.log(peso);
    console.log(altura);

    console.log(peso/(altura*altura));
