const {Router} = require("express") //usado para criar rotas
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require("../controladore/livro.js")

const router = Router()

router.get('/', getLivros )

router.get('/:id', getLivro)

router.post('/', postLivro )

router.patch('/:id', patchLivro )

router.delete('/:id', deleteLivro )



module.exports = router