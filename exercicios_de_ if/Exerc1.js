
/* 1. Faça um programa que receba o nome, cargo e salário de um funcionário. Se o funcionário ganhar abaixo de 1000 reais, 
 calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário desse funcionário.
*/

let prompt = require("prompt-sync")()

let nome = prompt ("digite um nome: ")
let cargo = prompt ("digite um cargo: ")
let salario = parseFloat(prompt ("digite um salario: "))

if (salario < 1000){
   
    salario=salario+salario*0.1
}  
    
console.log("o nome e:  " + nome)
console.log("o cargo e:  " + cargo)
console.log("o salario e:  " + salario)


