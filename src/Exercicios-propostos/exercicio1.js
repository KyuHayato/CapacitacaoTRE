/* 1) - Ao listar todos os números naturais abaixo de 10 que são múltiplos de 3 ou de 5, teremos 3, 5, 6 e 9. A soma desses múltiplos é 23. 
Encontre a soma de todos os múltiplos de 3 ou de 5 abaixo de 1000
 */
let soma = 0;
for(let i = 0;i < 1000;i++){
   
    if(i % 3 == 0 || i  % 5 == 0 ){
        console.log(i);
        soma = soma + i;
    }

    }
    console.log("A soma de todos os multiplos são: ", soma);
