function calculaVolume(){
    let raio = document.querySelector('#raio');
    let volume = 4/3 * Math.PI * (Math.pow(Number(raio.value), 3)); 

    alert(volume.toFixed(2))
}