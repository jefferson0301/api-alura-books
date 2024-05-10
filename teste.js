const fs = require("fs") // pode ler arquivos, escrever arquivos
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json") )
const novoDado = { id: '3', nome: 'Livro do Jefferson' }
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado ]))
console.log(dadosAtuais) // le arquivo