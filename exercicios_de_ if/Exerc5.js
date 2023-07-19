/*  5. Faça um programa receba dois valores e imprima qual é o maior número digitado. */

const prompt = require('prompt-sync')()

const numero1 = parseInt(prompt("Digite o primeiro numero: "))
const numero2 = parseInt(prompt("Digite o segundo numero: "))

if (numero1 > numero2) {
    console.log(numero1);
} else if (numero2 > numero1) {
    console.log(numero2);
} else {
    console.log("Os números são iguais"); 
}