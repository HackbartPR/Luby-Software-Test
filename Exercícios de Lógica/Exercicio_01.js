/*1) Implemente um método que crie um novo array baseado nos valores passados. 
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */

//Criação do método
function Exercicio_01(quant, str) {
  let arrayResult = new Array()

  for (let i = 0; i < quant; i++) {
    arrayResult.push(str)
  }

  return arrayResult
}

//Chamada do Método
Exercicio_01(3, 'a')

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_01(3, 'a'))
