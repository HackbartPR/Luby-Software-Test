/* 10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8] */

//Criação do método
function Exercicio_10(array1, array2) {
  let arrayResult = new Array()

  for (let i = 0; i < array1.length; i++) {
    let count = 0

    for (let j = 0; j < array2.length; j++) {
      array1[i] === array2[j] && count++
    }

    if (count != 0) {
      //Novo for para verificar se este valor já não está contido no novo array
      let newCount = 0

      for (let j = 0; j < arrayResult.length; j++) {
        arrayResult[j] === array1[i] && newCount++
      }

      newCount === 0 && arrayResult.push(array1[i])
    }
  }

  return arrayResult
}

//Chamada da Função
Exercicio_10([6, 8], [8, 9])

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_10([6, 8], [8, 9]))
