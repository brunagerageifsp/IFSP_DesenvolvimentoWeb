const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())
let id = "0"
let produtoscadastrados = []

//Endpoint de cadastro
app.post("/cadastraproduto", (request, response)=>{
    produtoscadastrados[id] = []
    produtoscadastrados[id][0] = request.body.nome
    produtoscadastrados[id][1] = request.body.preco
    produtoscadastrados[id][2] = request.body.codbarra
    console.log(produtoscadastrados);
    response.status(201).send({message: "Produto criado com Sucesso no ID " + id})    
    id++
});

//Endpoint que lista os produtos cadastrados
app.get("/listaprodutos", (request, response)=>{
    response.status(200).send({listadeprodutos: produtoscadastrados})
});


//Inicialização
app.listen(8888, (request, response) => {
    console.log("Express Iniciado com Sucesso")
});