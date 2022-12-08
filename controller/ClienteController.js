const express = require("express");
const router = express.Router();
const modelCliente = require("../model/ClienteModel");

router.get("/listar", (req, res) => {
  modelCliente
    .findAll()
    .then((clientes) => {
      return res.status(200).json(clientes);
    })
    .catch((erro) => {
      return res.status(400).json({
        erroStatus: true,
        erroMessagem: "Houve um erro ao listar Clientes",
        erroBancoDados: erro,
      });
    });
});

router.get("/listarClientes/:id", (req, res) => {
  let { id } = req.params;

  modelCliente
    .findByPk(id)
    .then((clientes) => {
      res.status(200).json(clientes);
    })
    .catch((erro) => {
      return res.status(400).json({
        erroStatus: true,
        erroMessagem: "Houve um erro ao encontrar cliente",
        erroBancoDados: erro,
      });
    });
});

router.post("/inserirClientes", (req, res) => {
  let { nome_cliente, email_cliente, telefone_cliente } = req.body;
  modelCliente
    .create({ nome_cliente, email_cliente, telefone_cliente })
    .then(() => {
      return res.status(201).json({
        erroStatus: false,
        menssagemStatus: "sucesso!",
      });
    })
    .catch((erro) => {
      return res.status(400).json({
        erroStatus: true,
        errorMessagem: "Houve um erro",
        erroBancoDados: erro,
      });
    });
});

router.put("/alterarClientes", (req, res) => {
  let { id, nome_cliente, email_cliente, telefone_cliente } = req.body;

  modelCliente
    .update(
      { nome_cliente, email_cliente, telefone_cliente },
      { where: { id } }
    )
    .then(() => {
      return res.status(201).json({
        erroStatus: false,
        menssagemStatus: "sucesso!",
      });
    })
    .catch((erro) => {
      return res.status(400).json({
        erroStatus: true,
        erroMessagem: "Houve um erro ao alterar",
        erroBancoDados: erro,
      });
    });
});

router.delete("/excluirClientes/:id", (req, res) => {
  let { id } = req.params;
  modelCliente
    .destroy({ where: { id } })
    .then(() => {
      return res.status(200).json({
        erroStatus: false,
        menssagemStatus: "Cliente excluido com sucesso!",
      });
    })
    .catch((erro) => {
      return res.status(400).json({
        erroStatus: true,
        erroMessagem: "Houve um erro ao excluir a Cliente",
        erroBancoDados: erro,
      });
    });
});

module.exports = router;
