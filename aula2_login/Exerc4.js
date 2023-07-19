/* Exercício 4: Verificação de idade Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior 
  de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não. */

const prompt = require('prompt-sync')();

const anoNasc = parseInt(prompt("Digite o ano de nascimento: "));
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNasc;

if (idade >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}