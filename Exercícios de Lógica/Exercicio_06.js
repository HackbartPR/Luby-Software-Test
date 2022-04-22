/* 6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7] */

//Criação do método
function Exercicio_06(arrayModel) {
  let arrayResult = new Array()

  arrayResult.push(arrayModel[0])

  for (let i = 1; i < arrayModel.length; i++) {
    let count = 0

    for (let j = 0; j < arrayResult.length; j++) {
      arrayModel[i] === arrayResult[j] && count++
    }

    count === 0 && arrayResult.push(arrayModel[i])
  }

  return arrayResult
}

//Chamada da função
Exercicio_06([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_06([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]))
