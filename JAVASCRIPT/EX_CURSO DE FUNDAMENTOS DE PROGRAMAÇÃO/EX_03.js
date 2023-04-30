const salarioDoMes = (horasTrabalhadas, valorSalario) => {
    const salarioB = horasTrabalhadas * valorSalario
    const salarioL = salarioB - salarioB * 30 / 100
    console.log(`Salário igual a R$${salarioL}`)
}

salarioDoMes(180, 60)
salarioDoMes(150, 40.5)
salarioDoMes(45, 45)
salarioDoMes(45, 60)
salarioDoMes(45, 66.6668)