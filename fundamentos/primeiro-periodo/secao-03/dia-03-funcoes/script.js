// const reader = {
//   name: 'Julia',
//   lastName: 'Pessoa',
//   age: 21,
//   favoriteBooks: [
//     {
//       title: 'O Senhor dos Anéis - a Sociedade do Anel',
//       author: 'J. R. R. Tolkien',
//       publisher: 'Martins Fontes',
//     },
//   ],
// };

// mensagem = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`

// console.log(mensagem)

// reader.favoriteBooks[1] = {

//   title: 'Harry Potter e o Prisioneiro de Azkaban',

//   author: 'JK Rowling',

//   publisher: 'Rocco',

// }

// console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`)



// const order = {

//   name: 'Luiz Silva',

//   phoneNumber: '11-98763-1416',

//   address: {

//     street: 'Rua das Flores',

//     number: '389',

//     apartment: '701',

//   },

//   order: {

//     pizza: {

//       marguerita: {

//         amount: 1,

//         price: 25,

//       },

//       pepperoni: {

//         amount: 1,

//         price: 20,

//       },

//     },

//     drinks: {

//       coke: {

//         type: 'Coca-Cola Zero',

//         price: 10,

//         amount: 1,

//       },

//     },

//     delivery: {

//       deliveryPerson: 'Ana Silveira',

//       price: 5,

//     },

//   },

//   payment: {

//     total: 50,

//   },

// };


// const customerInfo = (fullOrder) => {

//   // Adicione abaixo as informações necessárias.

//   return `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}`
// }


// console.log(customerInfo(order));


// const orderModifier = (fullOrder) => {

// 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'

// return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${object.key(fullOrder.order.pizza)[0]}, ${object.keys(fullOrder.order.pizza)[1]} e ${fullOrder.order.drinks.coke.type} é R$ ${fullOrder.payment.total}`};

// console.log(orderModifier(order));

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// const encontrarPosicao = (obj, i) => {
//   return Object.values(obj)[i];
// }
// console.log(encontrarPosicao(school, 0));

// const somaAlunos = (obj) => {
//   soma = 0
//   for (index = 0; index < Object.values(obj)[0].length; index += 1) {
//     soma += Object.values(obj)[0][index].students
//   }
//   return soma
// }

// console.log(somaAlunos(school))

// function verificarExiste(array, key) {
//   for (let i = 0; i < array.length; i++) {
//     if (!(key in Object.keys(array)[0][i])) {
//       return false; 
//     }
//   }
//   return true; 
// }

// console.log(verificarExiste(school, "professor"))

// alteraTurno = (object, nomeCurso, novoValor) => {
//   for (let i = 0; i < 4; i += 1) {
//     curso = Object.values(object)[0][i].course
//     if (curso === nomeCurso){
//       object.lessons[i].shift = novoValor
//     }  
//   }
// }
// alteraTurno(school, "Python", "Noite")
// console.log(school)

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
novaCesta = {}

function criaCesta(obj) { 
  for (let i = 0; i < obj.length; i += 1){
    let fruta = obj[i]
    if (!novaCesta[fruta]){
      novaCesta[fruta] = 1
    } 
    else {
      novaCesta[fruta] += 1
    }
  }
}
criaCesta(basket)
console.log(novaCesta)