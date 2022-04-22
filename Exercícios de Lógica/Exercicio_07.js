/* 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true */

//Criação do método
function Exercicio_07(array1, array2) {
  let isEqual = true

  if (array1.length !== array2.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      isEqual = false
      break
    }
  }

  return isEqual
}

//Chamada da função
Exercicio_07([1, 2, 3, 4], [1, 2, 3, 4])

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_07([1, 2, 3, 4], [1, 2, 3, 4]))
