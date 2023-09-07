const createItem = require("./createItem");

describe("a função createItem", () => {
  it("cria um item válido", () => {
    const result = createItem('banana', 'kg', 1.99, 20)

    const expectedResult = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }

    expect(result).toEqual(expectedResult)
  });
  it("utiliza zero como quantidade padrão", () => {
    const result = createItem('banana', 'kg')

    const expectedResult = { name: 'banana', unit: 'kg', price: 0, quantity: 0 }

    expect(result).toHaveProperty('quantity', 0)
  });
  it("Lança um erro quando não recebe parâmetros", ()=>{
    const resultfn = () =>  {
      createItem()
    }
    expect(resultfn).toThrow()

    const expectedResult = { name: 'banana', unit: 'kg', price: 0, quantity: 0 }
  });

  it("Lança um erro se o nome do item não é uma string", ()=> {
    const resultfn = () =>  {
      createItem(2, 2, 2, 2)
    }
    expect(resultfn).toThrow(/O nome do item deve ser uma string/)
  });
  it("Lança um erro se o preço é negativo",()=>{
    const resultfn = () =>  {
      createItem('banana', 2, -2, 2)
    }
    expect(resultfn).toThrow(/O preço do item deve ser maior que zero/)
  });

  it("Lança um erro se o preço é zero", ()=>{
    const resultfn = () =>  {
      createItem('banana', 2, 0, 2)
    }
    expect(resultfn).toThrow(/O preço do item deve ser maior que zero/)
  });
});
