const express = require("express");

const app = express();

const usuarios = [];

app.get('/usuarios', (request, response) => {
    response.json({ usuarios: [] })
})

app.post ('/usuario',(request, response) => {
    const usuario = {
        nome: "Beatriz",
        sobrenome: "Lopes"
    }
    
    usuarios.push(usuario);

    response.json({usuario});
}) 

app.get('/produtos', (request, response) => {
    response.json({ produtos: [] })
})

app.post ('/produtos',(request, response) => {
    response.json({ produtos: [] })
}) 


app.listen(3000, () => {
    console.log("Servidor iniciado")
})

