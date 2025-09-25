function calcularPagamento() {
    let valorGasto = parseFloat(document.getElementById("valorCompra").value)
    let formaPagamento = document.getElementById("formaPagamento").value
    let resultado = document.querySelector("#resultado")

    switch (formaPagamento) {
        case "pix":
            let valorFinal = valorGasto * 0.9
            resultado.innerHTML = "O valor a ser pago é de R$ " + valorFinal.toFixed(2)
            break
        case "debito":
            let valorFinal = valorGasto * 0.95
            resultado.innerHTML = "O valor a ser pago é de R$ " + valorFinal.toFixed(2)
            break
        case "credito":
            resultado.innerHTML = "O valor a ser pago é de R$ " + valorFinal.toFixed(2)
            break
        default:
            resultado.innerHTML = "SELECIONE UMA FORMA DE PAGAMENTO"
            resultado.style.color = "red"
            break
    }
}