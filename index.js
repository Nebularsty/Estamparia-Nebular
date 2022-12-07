const express = require('express');
const clienteController = require('./controller/ClienteController');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', clienteController);

app.listen(4800, () => {
    console.log('Projeto rodando em: http://localhost:4800')
    console.log("Back-end está funcionando!")
})