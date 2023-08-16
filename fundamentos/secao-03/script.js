//  Exercício 1

// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

//     Adição (num1 + num2)
//     Subtração (num1 - num2)
//     Multiplicação (num1 * num2)
//     Divisão (num1 / num2)
//     Módulo (num1 % num2)

let num1 = 2;
let num2 = 16;
let num3 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

if (num1 > num2 && num1 > num3) {
  console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3)
}

// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo. 

let angulo1 = 40
let angulo2 = - 40
let angulo3 = 100

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("triangulo")
  } else { console.log("nao triangulo") }
} else { console.log("nao triangulo") }

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro. 
// Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case). 
// Exemplo: Bispo -> Diagonais

let peca = "DAMA"
let movimento = ""

switch (peca.toLowerCase()) {
  case "rei":
    movimento = "1 casa";
    break;
  case "dama":
    movimento = "todos movimentos";
    break;
  case "torre":
    movimento = "linha reta";
    break;
  case "bispo":
    movimento = "diagonal";
    break;
  case "cavalo":
    movimento = "em L";
    break;
  case "peão":
    movimento = "1 casa pra frente";
    break;
}

console.log(movimento)

// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

let numero1 = 1
let numero2 = 7
let numero3 = 5

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {

  console.log("tem par")
} else {
  console.log("nao tem par")
}

// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

//     ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

let salario = 4000
let aliquota = 0
let imposto = 0

if (salario < 1.556) {
  aliquota = 0.08
}
else if (salario < 2594) {
  aliquota = 0.09
}
else if (salario < 5189) {
  aliquota = 1.1
}
else {
  salario -= 570
}

console.log(`depois do Inss ${salario * aliquota -= salario}`)

if (salario < 1903){
  imposto = 0
}
else if (salario < 2826){
  imposto = 0.075
}
else if (salario < 3751){
  imposto = 0.15
}
else if (salario < 4664){
  imposto = 0.225
}
else {
  imposto = 0.275
  salario -= 869
}

console.log (`liquido ${salario * imposto -= salario}`)