/*2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1] */

//Criação do método
function Exercicio_02(array) {
  let arrayResult = new Array()

  for (let i = array.length - 1; i >= 0; i--) {
    arrayResult.push(array[i])
  }

  return arrayResult
}

//Chamada do Método
Exercicio_02([1, 2, 3, 4])

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_02([1, 2, 3, 4]))
