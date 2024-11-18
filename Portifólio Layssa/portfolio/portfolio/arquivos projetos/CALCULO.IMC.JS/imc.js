
function calcularIMC() {
    var nome = document.getElementById("nomeid");
    var sexo = document.getElementById("sexoid");
    var altura = document.getElementById("alturaid");
    var peso = document.getElementById("pesoid");
    var h2F = document.getElementById("resultF");
    var h2M = document.getElementById("resultM");
    var h3 = document.getElementById("mensagem");
    var imc = peso.value / (altura.value * altura.value);
    var pesoideal=0;
    var pesoperder=0;

    if (sexo.value == "F"){ //feminino
        pesoideal= 25.8*(altura.value*altura.value);

        if(imc<20.7){ //abaixo do peso F
            h2F.innerHTML= (`${nome.value} vc está abaixo do peso ideal`);

        }
        else if(imc>=19.1 && imc<25.8){ //peso ideal F
            h2F.innerHTML= (`${nome.value} vc está no peso ideal`);

        }
        else if(imc>=25.8 && imc<=27.3){ //marginalmente acima do peso F
            pesoperder= peso.value - pesoideal;
            h2F.innerHTML= (`${nome.value} vc está marginalmente acima do peso ideal, vc precisa perder ${pesoperder} kg para atingir o peso ideal`);
        }
        else if (imc > 27.3 && imc <= 32.3) { //acima do peso ideal F
            pesoperder= peso.value - pesoideal;
            h2F.innerHTML= (`${nome.value} vc acima do peso ideal, vc precisa perder ${pesoperder} kg para atingir o peso ideal`);
        }
        else if (imc > 32.3) {// obeso F
            pesoperder= peso.value - pesoideal;
            h2F.innerHTML= (`${nome.value} vc está obeso, vc precisa perder ${pesoperder} kg para atingir o peso ideal`);
        }
    }

    if(sexo.value == "M"){
        pesoideal= 26.4*(altura.value*altura.value);
   
        if(imc<20.7){ //abaixo do peso M
        h2M.innerHTML=(`${nome.value} vc está abaixo do peso ideal`);

        }
        else if(imc>=20.7 && imc<26.4){ //peso ideal M
        h2M.innerHTML=(`${nome.value} vc está no peso ideal`);

        }
        else if(imc>=26.4 && imc<=27.8){ //marginalmente acima do peso M
        pesoperder= peso.value - pesoideal;
        h2M.innerHTML=(`${nome.value} vc está marginalmente acima do peso ideal, vc precisa perder ${pesoperder} kg para atingir o peso ideal`);

        }
        else if (imc > 27.8 && imc <= 31.1) { //acima do peso ideal M
        pesoperder= peso.value - pesoideal;
        h2M.innerHTML=(`${nome.value} vc acima do peso ideal, vc precisa perder ${pesoperder} kg para atingir o peso ideal`);

        }
        else if (imc > 31.1) {// obeso M
        pesoperder= peso.value - pesoideal;
        h2M.innerHTML=(`${nome.value} vc está obeso, vc precisa perder ${pesoperder} kg para atingir o peso ideal`);

        }

    }
     h3.innerHTML=(`${nome.value} \n sexo:${sexo.value} \n  peso:${peso.value}kg \n altura:${altura.value}m imc:${imc}`);


   
    
}