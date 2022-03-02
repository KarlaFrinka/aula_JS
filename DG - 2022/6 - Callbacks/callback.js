//setTimeout(() => { //calback function anonima
//console.log("opa, sou a callback sendo executada.")    
//}, 5000
//);

//let meuCallback = () => {
    //console.log('Executando a função meuCallback')
//}

//setTimeout(meuCallback, 3000);

let somar = (numero1, numero2) => numero1 + numero2;
let subtrair = (numero1, numero2) => numero1 - numero2;

let calculadora = (numero1, numero2, operacao) => operacao(numero1, numero2);

console.log(calculadora(10, 5, somar))
console.log(calculadora(5, 10, subtrair))
console.log(calculadora(5, 10, () => 5 + 10))
console.log(calculadora(5, 10, (numeroA, numeroB) => numeroA + numeroB))
