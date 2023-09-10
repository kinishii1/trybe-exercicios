const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Aland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// Crie a função getPopulation que retorne a quantidade total da população de todos os países.

const getPopulation = () => {
  const totalPopulation = countries.reduce((acc, country) => {
    return acc + country.population;
  }, 0);

  return totalPopulation;
};

// console.log(getPopulation())

const longestName = () => {
  const longestCountryName = countries.reduce((prev, country) => {
    if (prev.name.length < country.name.length) {
      return country;
    } else {
      return prev;
    }
  });

  return longestCountryName;
};


// console.log(longestName());

// Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. Essa função calcula e retorna a área total de todos os países de uma determinada região.

const totalAreaByRegion = (region = 'Europe') => {
  const totalArea = countries.reduce((prev, curr) => {
    if (curr.region === region) {
      return prev + curr.area;
    }
    return prev;
  }, 0);

  return totalArea;
};

// console.log(totalAreaByRegion());

// Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura:

// {
//   Asia: { name: 'Afghanistan', area: 652230 },
//   Europe: { name: 'Russia', area: 17098242 },
//   // ...
// }

const getLargestCountriesByRegion = () => {
  const result = countries.reduce((prev, curr) => {
    if (!prev[curr.region] || prev[curr.region].area < curr.area) {
      prev[curr.region] = { name: curr.name, area: curr.area };
    }
    return prev;
  }, {});

  return result;
};


console.log(getLargestCountriesByRegion());