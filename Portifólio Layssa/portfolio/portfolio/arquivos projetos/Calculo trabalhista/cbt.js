function calcular(){

    var calcularINSS = 0;
    var calcularIRPF = 0;
    var descontoINSS = 0;
    var descontoIRPF = 0;
    var descontoVT = 0;
    var salarioLiquido = 0;

    const vh = parseFloat(document.getElementById(`valorhora`).value);
    const ht = parseFloat(document.getElementById(`horast`).value);
    const valet = document.getElementById(`valetr`).value;
    const outrasd = parseFloat(document.getElementById(`outrosd`).value);

    //salario bruto
    const calsl = vh * ht;

    
    
    if (calsl <= 1320)
        {
            calcularINSS = calsl * 0.075;
        }
        else if (calsl <= 2571.29)
        {
            calcularINSS = (calsl - 1320) * 0.09 + 99;
        }
        else if (calsl <= 3856.94)
        {
            calcularINSS = (calsl - 2571.29) * 0.12 + 225.11;
        }
        else
        {
            calcularINSS = (calsl - 3856.94) * 0.14 + 387.63;
        }

        // Cálculo do IRPF
    if (calsl <= 2112)
        {
            calcularIRPF = 0;
        }
        else if (calsl <= 2826.65)
        {
            calcularIRPF = 0.075 * (calsl - 2112);
        }
        else if (calsl <= 3751.05)
        {
            calcularIRPF = 0.15 * (calsl - 2826.65) + 53.75;
        }
        else if (calsl <= 4664.68)
        {
            calcularIRPF = 0.225 * (calsl - 3751.06) + 158.95;
        }
        else
        {
            calcularIRPF = 0.275 * (calsl - 4664.68) + 345.98;
        }

        descontoINSS = calcularINSS;
        descontoIRPF = calcularIRPF;
       
        if (valet == "S")
        {
            descontoVT = calsl * 0.06;
        }
      
        salarioLiquido = (calsl - descontoINSS - descontoIRPF - descontoVT - outrasd);
        
        if( vh == ""|| ht == ""|| valet == "" || outrasd ==""){
            alert("Todos os campos devem ser preenchidos!");
            
        }
        else{
            const mensagemre = document.getElementById("mensagem");

            mensagemre.innerHTML = `Salário Bruto: R$${calsl.toFixed(2)}. Desconto INSS: -R$ ${descontoINSS}. Desconto IRPF: -R$ ${descontoIRPF}. Desconto Vale Transporte: -R$ ${descontoVT}. Outras Deduções: -R$ ${outrasd}. Salário Líquido: R$ ${salarioLiquido}`;
      
        }
       

      }