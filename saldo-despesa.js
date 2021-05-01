let familia1 = {
    receitas: [1000, 1500, 500],
    despesas: [500, 600, 1300]
}

function soma(array){
    let total = 0

    for(let value of array){
        total += value
    }
    return total
}

function calcular_balanco() {
    const calcular_receita = soma(familia1.receitas)
    const calcular_despesas = soma(familia1.despesas)
    const total = calcular_receita - calcular_despesas

    let saldo = total >= 0 ? 'positivo' : 'negativo'

    console.log(`seu saldo é ${saldo}: ${total}`);
}

calcular_balanco()