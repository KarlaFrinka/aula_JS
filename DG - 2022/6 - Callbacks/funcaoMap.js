let numeros = [1, 2, 3, 4, 5]
let objetos = {nome: 'valor'}

let numerosDobrados = numeros.map ( (numero) => {
    console.log('Valor: ${numero}')
    return numero * 2
} ) 

console.log(numeros)
console.log(numerosDobrados)