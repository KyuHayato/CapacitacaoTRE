/* 3) - Os fatores primos de 13195 são 5, 7, 13 e 29. 

Qual é o maior fator primo do número 600851475143 ? */
/* 
precisar de uma função para saber se é primo e usar ela num loop

Pesquisa crivo de erastotenes para descobrir se é primo. É o algoritmo básico */


function ehPrimo(numero) {
    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor === 0) return false;
    }
    return true;
}

function maiorFatorPrimo(numero) {
    for (let divisor = Math.floor(Math.sqrt(numero)); divisor >= 2; divisor--)
        if (numero % divisor === 0 && ehPrimo(divisor)) return divisor;
    return 1;
}

console.log(maiorFatorPrimo(600851475143))
