CREATE DATABASE api_estamparia_bd;

USE api_estamparia_bd;

CREATE TABLE tbl_clientes(
id int(10)  auto_increment,
nome_cliente varchar(50) not null,
email_cliente varchar(50),
telefone_cliente varchar(15),
createdAt DATETIME,
updatedAt DATETIME,
primary key (id)
);

INSERT INTO tbl_clientes
(nome_cliente, email_cliente, telefone_cliente)
VALUES
('Nicolas OLiveira', 'nicolas@gmail.com', '119203203');

INSERT INTO tbl_clientes
(nome_cliente, email_cliente, telefone_cliente)
VALUES
('Pedro Gonçalves', 'pedro@gmail.com', '1196433203');

INSERT INTO tbl_clientes
(nome_cliente, email_cliente, telefone_cliente)
VALUES
('Matheus Henrique', 'matheus@gmail.com', '1193453203');

SELECT * FROM tbl_clientes;

SELECT * FROM tbl_clientes WHERE id = 1;

UPDATE tbl_clientes SET nome_cliente = 'RECEBAAAAA'
WHERE id = 1;