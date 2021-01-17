/* 2) - Cada novo termo na seqüência de Fibonacci é gerado pela adição dos dois termos anteriores. Começando com 1 e 2, os primeiros 10 termos são:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89 */
/* 
Considerando os termos na sequência de Fibonacci que não excedam quatro milhões, encontre a soma dos termos com valor par. */

function fib(numero){
    
      if(numero == 1) return 1;                   
      else                                    
        if (numero == 2) return 2;                 
       else return fib(numero - 1) + fib(numero - 2);  
       
}
const numero = 10;
for(let x = 1; x <= numero; x++){
    console.log(fib(x));

}
// Segunda parte ainda em desenvolvimento e duvida 
/* let soma = 0
const numero = 9
for(let x = 1;x<numero;x++){
    if(fib(x) % 0){
        soma = fib(x)+ soma
        console.log(soma)

    }
    
}       */