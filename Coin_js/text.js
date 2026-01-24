const { soma, vezes, subtraçao, Cargenerator } = require('./Coin')

console.log(soma(4, 3), vezes(7, 2), subtraçao(15, 5))

const carro = new Cargenerator('Gol', 'Gol_Quadrado', 'Volkswagen', 2014)

console.log(carro)