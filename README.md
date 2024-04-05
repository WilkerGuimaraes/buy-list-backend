# Pass.in

## 📃 Descrição
Esta é um projeto back-end ao qual o objetivo foi desenvolver uma aplicação de gestão em eventos presenciais.

## ⚙ Funcionamento
### Requisitos funcionais
- [ ✔ ] O organizador deve poder cadastrar um novo evento;
- [ ✔ ] O organizador deve poder visualizar dados de um evento;
- [ ✔ ] O organizador deve poder visualizar a lista de participantes;
- [ ✔ ] O organizador deve poder se inscrever em um evento;
- [ ✔ ] O organizador deve poder visualizar seu crachá de inscrição;
- [ ✔ ] O organizador deve poder realizar check-in no evento;
### Regras de negócio
- [ ✔ ] O participante só pode se inscrever em um evento uma única vez;
- [ ✔ ] O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ✔ ] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais
- [ ✔ ] O check-in no evento será realizado através de um QRCode;

## 🛠 Tecnologias
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white) 	![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

##  Recursos
Este projeto utiliza o `@fastify/swagger` e `@fastify/swagger-ui`, que são plugins que trabalham juntos para simplificar a geração e a visualização da documentação Swagger para APIs desenvolvidas com Fastify, tornando o processo de documentação e exploração da API mais fácil e acessível.

## 💻 Executando
Após clonar o repositório, acesse a pasta do projeto e execute os comandos abaixo no seu terminal:

- Instale as dependências:
```

npm install

```
- Execute o script de execução do projeto:
```

npm run dev

```

Assim que o projeto estiver rodando, acesse o seu `http://localhost:3335/` no seu navegador.

## 🙋‍♂️ Colaboradores
Este projeto foi desenvolvido por mim Wilker Guimarães, com o auxílio do evento NLW Unite da Rockeseat. Um agradecimento especial à equipe da Rocketseat pelo conteúdo e recursos valiosos de conhecimento técnico na trilha de Node.js.

Instrutor responsável pelo tutorial:

Diego Fernandes
