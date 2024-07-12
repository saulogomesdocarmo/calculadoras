/**
 * Aplicativo para descobrir a área de um círculo
 * @author Saulo Gomes do Carmo
 */

console.clear()
console.log("Aplicativo para descobrir a área de um círculo")
console.log("")
const input = require("readline-sync")

const pi = 3.14 
let area,raio,r2

raio = Number(input.question("Digite um valor: "))
console.log("")
r2 = raio * raio
area = pi * r2 

console.log(`O valor do Raio é: ${raio.toFixed(2)}`)
console.log(`Valor do raio elevado ao quadrado é de: ${r2.toFixed(2)}`)
console.log(`Valor de PI é igual a ${pi.toFixed(2)}`)
console.log("_____________________________________________________________________________")
console.log("")
console.log(`Sabendo que, para descobrir a área de um ciruclo, precisamos multiplicar o valor de PI ${pi.toFixed(2)} pelo Raio ao quadrado.`)
console.log(`Logo teremos o valor de : ${area.toFixed(2)}`)

