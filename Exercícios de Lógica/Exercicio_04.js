/* 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4} */

//Criação do método
function Exercicio_04(array) {
  let objResult = new Object()

  for (let i = 0; i < array.length; i++) {
    objResult[array[i][0]] = array[i][1]
  }

  return objResult
}

const arrayModel = [
  ['c', 2],
  ['d', 4],
]

//Chamada do Método
Exercicio_04(arrayModel)

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_04(arrayModel))
