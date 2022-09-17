// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

const arrayNum = [1,2,3,4,5,6,7,8]

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma 
// `const triplos`, e guarde o valor do array nesta const;

const triplos = arrayNum.map((num) => {
    return num*3
})
console.log(triplos) 


// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma 
// `const metades`, e guarde o valor do array nesta const;

const metades = arrayNum.map((num) => {
    return num/2
})
console.log(metades)