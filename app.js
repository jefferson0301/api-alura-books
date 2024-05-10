const express = require("express")//impotou o express
const cors = require("cors")
const rotaLivro = require("./rotas/livro")
const app = express()

app.use(express.json())//permite que o bodyseja um json
app.use(cors({origin: "*"}))//resolve o problema de cores
app.use("/livros", rotaLivro)



const port = 8000 //porta que o servidor tá rodando 

app.listen(port, () => {
    console.log(`Escutando a porta ${port} `)
} )
