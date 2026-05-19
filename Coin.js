function soma(n1, n2) {
    return n1 + n2

}
function vezes(n1, n2) {
    return n1 * n2

}
function subtraçao(n1, n2) {
    return n1 - n2

}

class Cargenerator {
    constructor(nome, modelo, marca, ano) {
        this.Nome = nome
        this.Modelo = modelo
        this.Marca = marca
        this.Ano = ano
    }
    buzinar() {
        console.log(`O carro ${this.Nome} esta Buzinado (BIIIIIIIII)`)
    }
}


module.exports = { soma, vezes, subtraçao, Cargenerator }

