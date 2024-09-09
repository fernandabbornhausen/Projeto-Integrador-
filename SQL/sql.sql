-- Tabela de usuários (consumidores e produtores)
CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY IDENTITY(1,1), -- Usando IDENTITY para auto incremento
    nome VARCHAR(100),
    email VARCHAR(100),
    tipo_usuario VARCHAR(50), -- VARCHAR
    senha VARCHAR(100)
);

-- Tabela de categorias de produtos
CREATE TABLE Categorias (
    id_categoria INT PRIMARY KEY IDENTITY(1,1), -- Usando IDENTITY para auto incremento
    nome_categoria VARCHAR(50)
);

-- Tabela de produtos oferecidos pelos produtores
CREATE TABLE Produtos (
    id_produto INT PRIMARY KEY IDENTITY(1,1), -- Usando IDENTITY para auto incremento
    nome_produto VARCHAR(100),
    preco DECIMAL(10,2),
    id_categoria INT,
    id_produtor INT,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria),
    FOREIGN KEY (id_produtor) REFERENCES Usuarios(id_usuario)
);

-- Tabela de pedidos realizados pelos consumidores
CREATE TABLE Pedidos (
    id_pedido INT PRIMARY KEY IDENTITY(1,1), -- Usando IDENTITY para auto incremento
    id_usuario INT,
    data_pedido DATE,
    total_pedido DECIMAL(10,2),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- Inserindo usuários
INSERT INTO Usuarios (nome, email, tipo_usuario, senha) 
VALUES 
('Bruna Gabriela', 'bruna@email.com', 'consumidor', '1234'),
('Eventos e Feiras', 'leonardo@email.com', 'produtor', '4321');

INSERT INTO Categorias (nome_categoria) 
VALUES ('Frutas'), ('Verduras'), ('Laticínios');

-- Inserindo produtos
INSERT INTO Produtos (nome_produto, preco, id_categoria, id_produtor) 
VALUES 
('Banana', 2.50, 1, 2), 
('Alface', 1.50, 2, 2), 
('Quinoa', 20.00, 3, 2);

-- Inserindo pedidos
INSERT INTO Pedidos (id_usuario, data_pedido, total_pedido) 
VALUES (1, '2024-09-08', 12.50);


SELECT * FROM Produtos;
SELECT P.nome_produto, P.preco, C.nome_categoria, U.nome AS produtor
FROM Produtos P
JOIN Categorias C ON P.id_categoria = C.id_categoria
JOIN Usuarios U ON P.id_produtor = U.id_usuario;
SELECT U.nome, P.total_pedido, P.data_pedido
FROM Pedidos P
JOIN Usuarios U ON P.id_usuario = U.id_usuario
WHERE U.nome = 'Bruna Gabriela';