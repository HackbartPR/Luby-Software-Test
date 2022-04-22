/* 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] */

//Criação do método
function Exercicio_08(array) {
  let arrayResult = new Array()

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === '[]' || typeof array[i] === 'object') {
      array[i].map((item) => {
        arrayResult.push(item)
      })
    } else {
      arrayResult.push(array[i])
    }
  }

  return arrayResult
}

//Chamda da Função
Exercicio_08([1, 2, [3], [4, 5]])

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_08([1, 2, [3], [4, 5]]))
