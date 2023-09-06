const clients = [
  {
    name: "João da Silva",
    age: 28,
    email: "joao.silva@gmail.com",
    phone: "(11) 5555-5555",
    address: {
      street: "Rua dos Lírios",
      number: 123,
      neighborhood: "Jardim Primavera",
      city: "São Paulo",
      state: "SP",
      cep: "01234-567",
    },
  },
  {
    name: "Maria Souza",
    age: 35,
    email: "maria.souza@hotmail.com",
    address: {
      street: "Rua dos Cravos",
      number: 456,
      neighborhood: "Copacabana",
      city: "Rio de Janeiro",
      state: "RJ",
      cep: "12345-678",
    },
  },
  {
    name: "Pedro Oliveira",
    age: 42,
    email: "pedro.oliveira@gmail.com",
    address: {
      street: "Rua das Margaridas",
      number: 789,
      neighborhood: "Boa Viagem",
      city: "Recife",
      state: "PE",
      cep: "23456-789",
    },
  },
  {
    name: "Ana Santos",
    age: 25,
    email: "ana.santos@gmail.com",
    phone: "(71) 5555-5555",
    address: {
      street: "Rua dos Girassóis",
      number: 1011,
      neighborhood: "Barra",
      city: "Salvador",
      state: "BA",
      cep: "34567-890",
    },
  },
  {
    name: "Luiz Costa",
    age: 32,
    email: "luiz.costa@hotmail.com",
    address: {
      street: "Rua das Acácias",
      number: 1213,
      neighborhood: "Centro",
      city: "Belo Horizonte",
      state: "MG",
      cep: "45678-901",
    },
  },
  {
    name: "Isabela Almeida",
    age: 37,
    email: "isabela.almeida@gmail.com",
    phone: "(21) 5555-5555",
    address: {
      street: "Rua das Hortênsias",
      number: 1415,
      neighborhood: "Botafogo",
      city: "Rio de Janeiro",
      state: "RJ",
      cep: "56789-012",
    },
  },
  {
    name: "Rafael Ferreira",
    age: 29,
    email: "rafael.ferreira@hotmail.com",
    address: {
      street: "Rua das Orquídeas",
      number: 1617,
      neighborhood: "Pinheiros",
      city: "São Paulo",
      state: "SP",
      cep: "67890-123",
    },
  },
];

const findPersonByName = (name) => {
  const client = clients.find((client) => client.name === name);
  if (client) {
    return `Destinatário: ${client.name}. Endereço: ${client.address.street}, ${client.address.number}, ${client.address.neighborhood}, ${client.address.city} - ${client.address.state}. CEP: ${client.address.cep}`;
  } else {
    return "Pessoa não encontrada, tente novamente";
  }
};

// console.log(findPersonByName(''))

const findPersonByPosition = (position) => {
  const client = clients[position];
  try {
    return `Cliente: ${client.name}. email: ${client.email}`;
  } catch {
    return "Posição inválida, tente novamente";
  }
};

// console.log(findPersonByPosition(60))

const findPeopleByState = (targetState) => {
  try {
    const clientsState = [];

    clients.forEach((client) => {
      const clientState = client.address.state;
      if (clientState === targetState) {
        clientsState.push(client.name);
      }
    });

    if (clientsState.length === 0) {
      throw new Error('ninguem mora nesse estado');
    }

    return clientsState;
  } catch (error) {
    return "Erro inesperado: " + error.message;
  }
};

console.log(findPeopleByState('RJ'))
