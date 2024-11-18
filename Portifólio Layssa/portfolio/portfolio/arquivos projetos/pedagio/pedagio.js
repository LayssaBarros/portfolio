
 var contador =0; 

 var vmE =9999; //velocidade mínima
 var vmf =0; //velocidade maximima
 var media1 =0; //media de velocidade
 var somaV =0; // soma de velocidade
 var somaVa =0; //soma dos valores cobrados
 var maiorHF =0; // maior hora final
 var menorHI =9999; // menor hora inicial
 var menorMI =9999; // menor min final
 var maiorMF =0; // maior min inicial


function result(){
  contador++
    var placa= document.getElementById("placaid").value;
    var horaentrada = parseFloat(document.getElementById("entradaid").value);// valor em horas (entrada)
    var minentrada = parseFloat(document.getElementById("minentaid").value);// valor em minutos (entrada)
    var horasaida = parseFloat(document.getElementById("saidaid").value);// valor em horas (saida)
    var minsaida = parseFloat(document.getElementById("saidaminutaid").value);// valor em minutos (saida)
    var p = document.getElementById("resultadopedagio");// variavel para imprimir 
    var minicio=0;
    var tempo1 = 0;
    var tempo2 = 0;
    var msaida= 0;
    var tempofim= 0;
    var vm =0;
    var totalpedagio = 0;
    var quinze = 0;
    var dez = 0;
    
    
    minicio= minentrada /60;// min para hora
    tempo1= horaentrada + minicio;
    msaida = minsaida / 60;// min para hora
    tempo2 =  horasaida + msaida; 
    tempofim = tempo2 - tempo1; //tempo total
    vm = 70 / tempofim;// velocidade
    
    
    if(vm <= 60){
      quinze = (15/100)* 20; // DESCONTO
      totalpedagio = 20 - quinze;// total 
      p.innerHTML = (`Valor a pagar: R$ ${totalpedagio} \n Placa do veículo: ${placa} \n Hora de entrada: ${tempo1} \n Hora de saída: ${tempo2} \n Tempo gasto no percurso: ${tempofim} hrs `);
      somaVa+=totalpedagio;// soma dos valores a serem cobrados
      
    }
    else if (vm > 60 & vm == 100) {
      dez = (10 / 100) * 20; //DESCONTO
      totalpedagio = 20 - dez;// total
      p.innerHTML = (`Valor a pagar: R$ ${totalpedagio} \n Placa do veículo: ${placa} \n Hora de entrada: ${tempo1} \n Hora de saída: ${tempo2} \n Tempo gasto no percurso: ${tempofim} hrs`);
      somaVa+=totalpedagio;// soma dos valores a serem cobrados
    } 
    else if (vm > 100) {
      totalpedagio = 20;// total
      p.innerHTML = (`Valor a pagar: R$ ${totalpedagio} \n Placa do veículo: ${placa} \n Hora de entrada: ${tempo1} \n Hora de saída: ${tempo2} \n Tempo gasto no percurso: ${tempofim} hrs`);
      somaVa+=totalpedagio;// soma dos valores a serem cobrados
    }

    if(vm >= vmf) {

      vmf = vm;
      
    }
    if(vm <= vmE) {
      
      vmE = vm;
      
    }
    somaV += vm;
    media1 = somaV / contador;

    if(contador == 1)
   {
   }

   if(horaentrada<= menorHI){
     menorHI = horaentrada;
     
   }
   if(minentrada<= menorMI){
     menorMI = minentrada;
     
   }

   if(horasaida>=maiorHF){
     maiorHF = horasaida;
     
   }

   if(minsaida>=maiorMF){
     maiorMF = minsaida;
     
   }
 
 

 }
 function finalizar(){

    const mensagem = document.getElementById("final");

    mensagem.innerHTML = `Menor velocidade registrada: ${vmE}
    Maior velocidade registrada: ${vmf}
    \n Média das velocidades registradas: ${media1}
    \n Total dos valores a serem cobrados: ${somaVa}
    \n Hora de inicio do processamento ${menorHI}:${menorMI}
    \n Hora de término do processamento ${maiorHF}:${maiorMF}`;




 }

