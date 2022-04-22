/* 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2] */

//Criação do método
function Exercicio_03(array) {
  let arrayResult = new Array()

  array.map((item) => {
    if (item !== '' && item !== undefined && item !== false && item !== 0 && item !== null) {
      arrayResult.push(item)
    }
  })

  return arrayResult
}

//Chamada do Método
Exercicio_03([1, 2, '', undefined])

//Para visualizar o resultado em um terminal de comando, habilite a função abaixo:
//console.log(Exercicio_03([1, 2, '', undefined]))
