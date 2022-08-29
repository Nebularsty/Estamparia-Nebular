const express = require('express');

const app = express();

app.get('/Principal', (req, res) => {
    console.log('Projeto Estamparia');
    res.send('Loading...');
})

app.listen(3000, () => {
    console.log('Projeto rodando em: http://localhost:3000')
})