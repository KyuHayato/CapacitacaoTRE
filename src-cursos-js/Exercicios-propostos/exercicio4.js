/* 4) - Um número palíndromo pode ser lido da mesma forma em ambos os sentidos. O maior palíndromo obtido do produto de dois números de dois dígitos é 9009 = 91 × 99. Encontre o maior palíndromo que seja o produto de dois números de três dígitos */

let i = 0
let j = 0
let pol = 0
while (i <= 999) {
    j = i;
    while (j <= 999) {
       let temp = (i * j);
       let tempInverso = String(temp.lastIndexOf());
        if (temp == tempInverso) {
            let polTemp = int(temp);
            if (polTemp > pol) {
                pol = polTemp

            }
        }

        j += 1;
    }
    i += 1;
}
console.log(pol)

