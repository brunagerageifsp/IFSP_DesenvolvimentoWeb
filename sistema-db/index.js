const express = require("express");
const model = require("./models");

const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');

const Funcionario = model.funcionarioModel;
const Produto = model.produtoModel;

swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(cors())
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

// let id = "0"
// let produtoscadastrados = []
// let funcionarioscadastrados = []

//Com banco de dados
//Endpoint de cadastro de produtos
app.post("/cadastraproduto", (request, response)=>{
    Produto.create({
        nome: request.body.nome,
        preco: request.body.preco,
        codbarra: request.body.codbarra
    }).then((object) => {response.send(object)});
});

//Com banco de dados
//Endpoint que lista os produtos cadastrados
app.get("/listaprodutos", (request, response)=>{
    Produto.findAll().then((object) => {
        response.send(object);
    })
});

//Com banco de dados
//Endpoint de cadastro de funcionario
app.post("/cadastrafuncionario", (request, response) => {
    Funcionario.create({
        nome: request.body.nome,
        documento: request.body.documento,
        telefone: request.body.telefone,
        senha: request.body.senha
    }).then((object) => {response.send(object)});
});

//Com banco de dados
//Endpoint de consulta de funcionarios
app.get("/listafuncionarios/", (request, response)=>{
    //const id = request.params.id;
    //response.status(200).send({listadefuncionarios: funcionarioscadastrados})
    Funcionario.findAll().then((object) => {
        response.send(object);
    })
    // .catch((error) => {
    //     console.log(error);
    //     response.sendStatus(500);
    // });
});

//Inicialização
app.listen(8888, (request, response) => {
    console.log("Express e Swagger Iniciados com Sucesso")
});

// //Endpoint de cadastro de funcionario
// app.post("/cadastrafuncionario", (request, response)=>{
//     funcionarioscadastrados[id] = []
//     funcionarioscadastrados[id][0] = request.body.nome
//     funcionarioscadastrados[id][1] = request.body.documento
//     funcionarioscadastrados[id][2] = request.body.telefone
//     funcionarioscadastrados[id][3] = request.body.senha
//     funcionarioscadastrados[id][4] = request.body.gestor
//     console.log(funcionarioscadastrados);
//     response.status(201).send({message: "Funcionario criado com Sucesso no ID " + id})    
//     id++
// });

// //Endpoint que lista os produtos cadastrados
// app.get("/listafuncionarios", (request, response)=>{
//     response.status(200).send({listadefuncionarios: funcionarioscadastrados})
// });

// //Endpoint de cadastro de produtos
// app.post("/cadastraproduto", (request, response)=>{
//     produtoscadastrados[id] = []
//     produtoscadastrados[id][0] = request.body.nome
//     produtoscadastrados[id][1] = request.body.preco
//     produtoscadastrados[id][2] = request.body.codbarra
//     console.log(produtoscadastrados);
//     response.status(201).send({message: "Produto criado com Sucesso no ID " + id})    
//     id++
// });

// //Endpoint que lista os produtos cadastrados
// app.get("/listaprodutos", (request, response)=>{
//     response.status(200).send({listadeprodutos: produtoscadastrados})
// });
