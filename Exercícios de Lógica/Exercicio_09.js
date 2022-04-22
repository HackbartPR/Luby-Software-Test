/* 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]] */

//Criação do método
function Exercicio_09(array, num) {
  let arrayResult = new Array()
  let lastIndex = array.length - 1

  array.length % 2 != 0 && lastIndex--

  for (let i = 0; i <= lastIndex; i += num) {
    const arrayTemp = new Array()

    for (let j = i; j < i + num; j++) {
      arrayTemp.push(array[j])
    }

    arrayResult.push(arrayTemp)
  }

  array.length % 2 != 0 && arrayResult.push([array[array.length - 1]])

  return arrayResult
}

//Chamada da Função
Exercicio_09([1, 2, 3, 4, 5], 2)

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_09([1, 2, 3, 4, 5], 2))
