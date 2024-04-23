# Servidor da lista de compras

## 📃 Descrição

Este é um projeto back-end ao qual o objetivo foi desenvolver as rotas de leitura, criação e remoção de produtos da aplicação "buy-list'. Como também conceder acesso ao banco de dados MongoDB.

## ⚙ Funcionamento

- O usuário pode adicionar um novo produto.
- Este produto será armazenado no banco de dados.
- O projeto Front-end irá fazer uma requisição nesta API para que assim, os dados dos produtos sejam retornados do banco de dados.
- O usuário também poderá realizar uma requisição através da interface para deletar o produto do banco de dados e removê-lo da tela.

## 🛠 Tecnologias

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## 🧰 Recursos

Este projeto utiliza algumas ferramentas de desenvolvimento back-end utilizando o Node.js:

- `mongoose`: é uma biblioteca Node.js que fornece uma camada de modelagem de dados MongoDB mais poderosa e fácil de usar. Ao qual foi usado para definir esquemas de dados, ou seja, modelos de tabelas para definir a estrutura de "produtos" da aplicação em um banco de dados MongoDB.
- `cors`(Cross-Origin Resource Sharing): é um mecanismo de segurança utilizado pelos navegadores para determinar se scripts de uma origem determinada têm permissão para acessar recursos de outra origem na web. Com isso o projeto Front-end conseguiu realizar as solicitações da API sem violar as políticas de segurança do navegador.
- `dotenv`: é um pacote Node.js que carrega variáveis de ambiente de um arquivo `.env` para o processo do Node.js. Estas variáveis de ambiente foram usadas para armazenar a dados sensíveis necessários para realizar a conexão ao banco de dados.

## 💻 Executando

Após clonar o repositório, acesse a pasta do projeto e execute o seguinte comando para instalar todas as dependências:

```

npm install

```

Após isso, crie um arquivo na pasta raiz do projeto com o node de `.env`. Neste arquivo, determine o seu nome de login e senha de conexão ao banco de dados MongoDB:

![env-file](https://imgur.com/rcIql0I.png)

- Execute o script de execução do projeto:

```

npm run dev

```

Assim que o projeto estiver rodando, acesse o seu `http://localhost:3335/` no seu navegador.

Para testar esta aplicação, você pode utilizar o arquivo `api.http` localizado para pasta raiz do projeto. Neste arquivo contém as todas as requisições desta API, para utilizá-las siga as seguintes instruções:

1. Baixe a extensão do VSCode chamada `Rest Client`
   ![rest-client-img](https://imgur.com/bFStodZ.png)

2. Para utilizar a requisição POST, informe o nome do produto como valor da propriedade `productName`. Após enviar a requisição, verifique o seu banco de dados para visualizar a tarefa armazenada.
3. Para utilizar a requisição DELETE, você precisa informar no final da requisição, após `/productsList/`, o valor do `id` do produto ao qual você deseja deletar.

## 🙋‍♂️ Colaboradores

Este projeto foi desenvolvido apenas por mim Wilker Guimarães, com o objetivo de aplicar e desenvolver os meus conhecimentos Back-end e utilizá-lo junto com uma aplicação Front-end.

Para acessar o projeto Front-end acesse este link: https://github.com/WilkerGuimaraes/buy-list-frontend
