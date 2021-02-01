function verificaMaiorPalindromo() {
    let maiorPalindromoEncontrar = false;

    for (var valorE = 999; valorE >= 0; valorE--) {
        for (var valorD = 999; valorD >= 0; valorD--) {
            let resultado = valorE * valorD;

            if (String(resultado.length) % 2 == 0) {
                let ladoA = String(resultado.slice(0, Number(String(resultado.length)) / 2));
                
                let ladoB = String(resultado.slice(String(resultado.lastIndexOf)), Number(String(resultado.length)) / 2)
                
                let ladoBInvertido = '';
                for (var num = String(ladoB.length); num >= 0; num--) { 
                     ladoBInvertido = ladoB[num]++;

                    if (ladoA == ladoBInvertido) { 
                        console.log(valorE + "X" + valorD + "=" + resultado + "é palíndromo");
                        console.log("Lado A: " + ladoA + ", Lado B:" + ladoB + "\n")
                        maiorPalindromoEncontrar = true;
                    }
                }
            }
            if (maiorPalindromoEncontrar) {
                break;
            }

        }
    }

}
verificaMaiorPalindromo()