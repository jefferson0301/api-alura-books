const fs = require("fs")

function getTodosLivros(){
   return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = getTodosLivros()

    const livroFiltrado = livros.filter(livro => livro.id === id)
    return livroFiltrado
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = getTodosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)// retorna o indice

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}
    // 1 caso ele "compara os os dois" se tiver dois parametros iguais => substitui
    // se não tiver 2 parametros iguais ele adiciona
    // 1 caso
    // livrosAtuais = {id:"yyy",nome: "xxx"}
    //modificacoes = {id:"zzz",nome: "xxx"}
    // resultado altera para {id:"zzz",nome: "xxx"}
    //2 caso
    // livrosAtuais = {id:"yyy",nome: "xxx"}
    //modificacoes = {marca:"saraiva"}
    //resultado = {id:"yyy",nome: "xxx", marca:"saraiva"}
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais) )
}

function insereLivro(novoLivro){
    const livros = getTodosLivros()
    const novaListaDelivros = [...livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDelivros) )
}

function deletetarLivro(id){
    let livros = getTodosLivros()
    livros = livros.filter(livro => id !== livro.id)
    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletetarLivro
}