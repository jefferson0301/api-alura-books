const fs = require("fs") //fs le e escreve no arquivo
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletetarLivro } = require("../servicos/livro")

//pega todos os livros
function getLivros(req, res){ // req = requisição res = resposta
    try {
        const livros  = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//pega 1 livro
function getLivro(req, res){ // req = requisição res = resposta
    try {
        const id = req.params.id
        if(id && Number(id) ){ //verifica se existe id e se id é um número
            const livro  = getLivroPorId(id)
            res.send(livro)
        }else{
            res.status(422) //significa que algum dado enviado não é
            //como a aplicação espera
            res.send("ID inválido")
        }
       
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//adiciona 1 livro
function postLivro(req, res){
    try {
        const novoLivro = req.body
        if(req.body.nome && req.body.id){
            insereLivro(novoLivro)
            res.send("Livro inserido com sucesso")
            res.status(201)
        }else{
            res.status(422)
            if(!req.body.nome){
                res.send("O campo nome é obrigatório")
            }
            if(!req.body.id){
                res.send("O campo id é obrigatório")
            }
            
        }
        
    } catch (error) {
        res.stpostLivroatus(500)
        res.send(error.message)
    }
    //res.send("Você fez uma requisição do tipo POST")
} 

//modifica 1 livro
function patchLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id) ){
            const modificacoes = req.body
            modificaLivro(modificacoes, id)
            res.send("Item modificado com sucesso")
            res.status(200)
        }else{
            res.status(422) 
            res.send("ID inválido")
        }
        
    } catch (error) {
        res.send(error.message)
        res.status(500)
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            deletetarLivro(id)
            res.send("Livro deletado com sucesso")
            res.status(200)
        }
        else{
            res.status(422) 
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}