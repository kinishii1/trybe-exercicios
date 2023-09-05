const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

// Percorra o array imprimindo todos os valores contidos nele com a função console.log(). 

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado. 

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index]
  console.log(soma)
}


// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. 

console.log(`media aritmetica = ${soma / numbers.length}`)

// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”. 

mensagem = soma / numbers.length > 20 ? 'O valor da média aritmética é maior que 20' : 'O valor da média aritmética é menor ou igual a 20'
console.log(mensagem)

// Utilizando for, descubra o maior valor contido no array e imprima-o. 
let maior = 0
for (let index = 0; index < numbers.length; index += 1) {
  let numero_atual = numbers[index]
  if (numero_atual > maior) {
    maior = numero_atual
  } else {
    console.log("numero menos")
  }
}
console.log(maior)
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. 
let numeros_impar = 0
for (let index = 0; index < numbers.length; index += 1) {
  let numero_atual = numbers[index]
  numero_atual % 2 == 1 ? numeros_impar += 1 : console.log("numero par")
}
console.log(numeros_impar)


// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let fatorial = 1
for (index = 10; index > 0; index -= 1) {
  fatorial *= index
}
console.log(fatorial)


// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();

const palavra = 'tryber'
let palavra_reverse = ""

palavra_reverse = palavra.split("").reverse().join("")

console.log(palavra_reverse)

// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

// let n = 5;

// let symbol = '*';

// let inputLine = '';


// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {

//   inputLine = inputLine + symbol;

// };


// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {

//   console.log(inputLine);

// };

// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let symbol = '*';
let inputLine = '';


for (let index = 1; index <= n ; index += 1){
  inputLine = inputLine + symbol 
  console.log(inputLine)
}