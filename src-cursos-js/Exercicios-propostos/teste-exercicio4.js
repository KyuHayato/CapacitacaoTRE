function verificaMaiorPalindromo() {
    let maiorPalindromoEncontrar = false;

    // Esses loops não garantem pegar o máximo
    for (let valorE = 999; valorE >= 0; valorE--) {
        for (let valorD = 999; valorD >= 0; valorD--) {
            let resultado = valorE * valorD;

            // Por que essa verificação se é par?
            if (String(resultado.length) % 2 === 0) {
                let ladoA = String(resultado.slice(0, Number(String(resultado.length)) / 2));
                // Lastindexof está sendo passado sem parâmetro!
                let ladoB = String(
                    resultado.slice(String(resultado.lastIndexOf)),
                    Number(String(resultado.length)) / 2
                )

                // Sugiro criar uma função separada que verifica se é palíndromo.
                let ladoBInvertido;
                for (let num = String(ladoB.length); num >= 0; num--) {
                    ladoBInvertido = ladoB[num]++;
                    if (ladoA === ladoBInvertido) {
                        console.log(valorE + "X" + valorD + "=" + resultado + "é palíndromo");
                        console.log("Lado A: " + ladoA + ", Lado B:" + ladoB + "\n")
                        maiorPalindromoEncontrar = true;
                    }
                }
            }
            // Muito estranho esse if! Melhor fazer a função retornar o resultado.
            if (maiorPalindromoEncontrar) {
                break;
            }
        }
    }
}

// Código roda mas não imprime nada
verificaMaiorPalindromo()
