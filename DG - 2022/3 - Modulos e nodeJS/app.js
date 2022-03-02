let filmes = require("./Filmes")
let series = require("./Series")

function excluirFilmes(){
    filmes.pop()
    filmes.pop()
    return filmes
}

console.log(filmes)

console.log(excluirFilmes())
console.log(series)