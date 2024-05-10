const fs = require("fs")

function getTodosFavoritos(){
   return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id){
    let livrosFavoritos = getTodosFavoritos()
    livrosFavoritos = livrosFavoritos.filter( livrosFavorito => id !== livrosFavoritos.id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFavoritos) )
}

function insereFavorito(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = getTodosFavoritos()

    const livroInserido = livros.find( livro => livro.id === id)//pega o livro favorito
    const novaListaDelivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDelivrosFavoritos) )
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}