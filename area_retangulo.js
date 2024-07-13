/**
 * Aplicativo para descobrir o Perímetro de um Retângulo
 * @author Saulo Gomes do Carmo
 */

console.clear()
console.log("Aplicativo para descobrir o Perímetro de um Retângulo.")
console.log("")
const input = require("readline-sync")
let altura,largura,perimetro

altura = Number(input.question("Digite a altura em cm: "))
largura = Number(input.question("Digite a largura em cm: "))
console.log("")
perimetro = (altura + largura) * 2 

console.log(`O Perímetro do retângulo é de ${perimetro}cms.`)
console.log("")