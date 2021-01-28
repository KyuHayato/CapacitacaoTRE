function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtAno');
    var res = document.querySelector('div#res');

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert("Dados invalidos, verifique os dados e tente novamente!");
    } else {
        var fSex = document.getElementsByName("radsex");
        var idade = ano - Number(formAno.value)
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','img/bebe-menino.png');
            } else {
                if (idade <= 21) {
                    img.setAttribute('src','img/homem-jovem.png');
                    //jovem
                } else {
                    if (idade <= 50) {
                        img.setAttribute('src','img/homem-adulto.png');
                        //adulto
                    } else {
                        img.setAttribute('src','img/homem-idoso.png');
                        //idoso
                    }
                }
            }
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','img/bebe-menina.png');
                //crianca
            } else {
                if (idade <= 21) {
                    img.setAttribute('src','img/mulher-jovem.png');
                    //jovem
                } else {
                    if (idade <= 50) {
                        img.setAttribute('src','img/mulher-adulto.png');
                        //adulto
                    } else {
                        //idoso
                        img.setAttribute('src','img/mulher-idosa.png');
                    }
                }
            }
        }

        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos.";
        res.appendChild(img);
    }
}