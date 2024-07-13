/**
 * Aplicativo para calcular a Frequência Máxima Cardiáca utilizando a Fórmula de Tanaka
 * @author Saulo Gomes do Carmo
 */
console.clear()
console.log("Aplicativo para calcular a Frequência Máxima Cardiáca utilizando a Fórmula de Tanaka ")
console.log("")
const input = require("readline-sync")
let idade,frequencia

idade = Number(input.question("Digite aqui a sua idade: "))
frequencia = 208 - (0.7 * idade)

console.log(`Sua Frequência Cardiáca Máxima é de: ${frequencia.toFixed(0)} BPM`)