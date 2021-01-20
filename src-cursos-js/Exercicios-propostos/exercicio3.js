/* 3) - Os fatores primos de 13195 são 5, 7, 13 e 29. 

Qual é o maior fator primo do número 600851475143 ? */
/* 
precisar de uma função para saber se é primo e usar ela num loop

Pesquisa crivo de erastotenes para descobrir se é primo. É o algoritmo básico */
// Gambiarra sem sucesso 
let valorLimite = 10;
let x = 2
while (x <= valorLimite) {
    if (valorLimite % 2 == 0) {
        x = 3;
    } else {
        console.log(valorLimite);
        valorLimite--;
    }
    if ((valorLimite) % 3 == 0) {
        x = 5;
    } else {
        console.log(valorLimite);
        valorLimite--;
    }
    if ((valorLimite) % 5 == 0) {
        x = 7;
    } else {
        console.log(valorLimite);
        valorLimite--;
    
    } if ((valorLimite) % 7 == 0) {
        x = 11;
    } else {
        console.log(valorLimite);
        valorLimite--;
    }
    if((valorLimite) % 11 == 0){
        x = 13;
    } else {
        console.log(valorLimite);
        valorLimite--;
    } 
    if((valorLimite) % 11 == 0){
        x = 17;
    } else {
        console.log(valorLimite);
        valorLimite--;
    }
    console.log(valorLimite);
    x++;
}

