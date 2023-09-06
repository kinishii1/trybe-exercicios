// Primeira parte
const promo = [
  { product: "bola de beach tennis", price: 29.99 },
  { product: "mochila de trilha 20 litros", price: 120.99 },
  { product: "capacete de ciclista", price: 180.59 },
  { product: "toalha compacta de secagem", price: 39.99 },
  { product: "kit 5 camisetas Dry Fit", price: 99.99 },
  { product: "caneleiras de peso - 3kg (par)", price: 44.99 },
  { product: "bola de ginástica e pilates", price: 149.59 },
  { product: "óculos de natação", price: 18.99 },
  { product: "capa protetora de prancha de surf", price: 89.59 },
  { product: "bola de basquete", price: 39.99 },
];

const button = document.querySelector("#send-button");

button.addEventListener("click", () => {
  const name = document.querySelector("#name-id").value;
  const number = document.querySelector("#number-id").value;
  const errorString = verifyString(name);
  const errorNumber = verifyNumber(number);

  if (errorNumber || errorString) {
    console.log(errorNumber.message)
    console.log(errorString.message)
  } else {
    showPromo(name, number);
  }
});

const verifyString = (name) => {
  if (typeof name !== "string" || name === "") {
    throw new Error("Nome invalido");
  }
};

const verifyNumber = (number) => {
  if (
    typeof number !== "number" ||
    number == 0 ||
    number > 10 ||
    number === ""
  ) {
    throw new Error("numero invalido");
  }
};

const showPromo = (name, number) => {

  const firstText = document.querySelector("#text-initial");
  const secondText = document.querySelector("#text-final");
  const productObject = checkNumber(parseInt(number));

  firstText.innerHTML = `Boas-vindas, ${name}!`;
  secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
};

// Segunda parte
const checkNumber = (number) => {
  return promo[number - 1];
};
