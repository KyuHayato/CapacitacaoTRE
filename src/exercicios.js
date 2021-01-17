// Exercicio de Fibonacci com soma

function fib(numero){
    
      if(numero == 1) return 1;                   
      else                                    
        if (numero == 2) return 2;                 
       else return fib(numero - 1) + fib(numero - 2);  
       
}
const numero = 10
for(let x = 1; x<=numero;x++){
    console.log(fib(x))

}
/* let soma = 0
const numero = 9
for(let x = 1;x<numero;x++){
    if(fib(x) % 0){
        soma = fib(x)+ soma
        console.log(soma)

    }
    
}       */