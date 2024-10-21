function calcularComanda() {
    //Pegar valores dos Inputs HTML e colocar nas variáveis const do JS
    const quantidadePessoas = document.getElementById("quantidade_pessoas").value;
    const valorTotal = document.getElementById("valor_total").value;

    //Converter os Valores (Sounds Java)
    const qtdPessoas = parseInt(quantidadePessoas);
    const vlTotal = parseFloat(valorTotal);

    //Verificar se os valores são válidos
    if (isNaN(qtdPessoas) || isNaN(vlTotal) || qtdPessoas<=0) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    //Calcular Resultado
    let valorPorPessoa = vlTotal / qtdPessoas;

    //Pegar valor da Check Box da Taxa de Serviço e colocar em variáveis
    const taxa_servico = document.getElementById("tx_svc").checked;

    //Verificar se há Taxa de Serviço e Calcular
    if (taxa_servico){
        valorPorPessoa = valorPorPessoa * 1.10; //Aumenta 10%
    }

    //Exibir valor
    document.getElementById("resultado").innerText = "Valor por pessoa: R$ " + valorPorPessoa.toFixed(2);

}