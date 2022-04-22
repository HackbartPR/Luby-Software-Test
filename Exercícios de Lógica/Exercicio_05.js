/* 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2] */

/* Para deixar o exercício proposto mais difícil, a lógica a seguir ao invés de pegar apenas dois números de parametros depois do array,
ela pode receber quantos números quiser, portanto que eles estejam dentro de um array */
function Exercicio_05(arrayModel, arrayExcep) {
  let arrayResult = new Array()

  for (let i = 0; i < arrayModel.length; i++) {
    let count = 0

    arrayExcep.map((item) => {
      item === arrayModel[i] && count++
    })

    count == 0 && arrayResult.push(arrayModel[i])
  }

  return arrayResult
}

//Chamada do Método
Exercicio_05([5, 4, 3, 2, 5], [5, 3])

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_05([5, 4, 3, 2, 5], [5, 3]))
