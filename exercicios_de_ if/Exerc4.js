/*  4. Faça um programa que receba um número do usuário e informe se este número é par ou ímpar. */

const prompt = require('prompt-sync')()

const Numero = parseInt(prompt("Verificar se é par ou impar Digite um numero: "))

if (Numero % 2 == 0) {
    console.log("par");
} else {
    console.log("ímpar");
}
