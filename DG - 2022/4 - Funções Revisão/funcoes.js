function soma(numero1,numero2){
    console.log(numero1 + numero2)
};



function podeTirarCarteira(idade){
    if (idade < 18){
        return "Pessoa menor de idade. Infelizmente não é possível tirar a CNH!"
    } else{
        return "Opa, pode tirar a CNH!"
    }
}
//soma(10, 10)
console.log(podeTirarCarteira(18))
//NaN = Not a Number