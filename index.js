const express = require("express")
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hugovasc8:ra1InoZR5zyhDOra@apilivros.qdawgk3.mongodb.net/?retryWrites=true&w=majority&appName=ApiLivros')

const Livro = mongoose.model('Livro', {
    nome: String,
    editora: String,
    autor: String,
});

const app = express()
const port = 3000
app.use(express.json())

app.get("/", async (req, res) => {
    const Livros = await Livro.find()
    return res.send("Livro")
})
app.put("/:id", async(req,res) => {
    const Livro = await Livro.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        editora: req.body.editora,
        autor: req.body.autor,
    }, {
        new: true
    })
    return res.send(Livro)
})

app.delete("/:id", async(req, res) => {
    const Livros = await Livro.findByIdAndRemove(req.params.id)
    return res.send(Livro)
})

app.post("/", async (req, res) => {
    const Livros = new Livro({
        nome: req.body.nome,
        editora: req.body.editora,
        autor: req.body.autor,
    })
    await film.save()
    return res.send(Livro)
})

app.listen(port, () => {
    console.log('App running')
})