# School Back-end API with Node.js and Docker :rocket:

App com toda a estrutura sendo montada de um banco de dados, com operações CRUD utilizando a lib express com rotas e a lib sequelize.

## Objetivo

:fire: Demonstrar aprendizados back-end, desde a estruturação do projeto em pastas e organização no geral, criação de um DB, até utilização de express e sequelize para montar uma API.

### Diferenciais

- Organização do projeto e separação de pastas, usando o express para rotas, além de criar models, services e controllers.
- Utilização do sequelize para fazer um código que funcione em qualquer SGBD.
- Utilização das libs Joi para fazer validações e JWT(json web token) para criar tokens com criptografia, além de outras práticas para melhor segurança.
- Arquivos .env criados para variáveis de ambiente, personalizando o projeto de forma segura.

### :smirk: Rodando a API

__________________________________
 Para esta aplicação eu usei o aplicativo do Docker Desktop. Caso já tenha um container com uma imagem do MySQL aberta, pode usá-la. Caso contrário, com o app aberto, crie e rode um container com o comando:
 
 `docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=suaSenha -d -p 3306:3306 mysql:8.0.29`
 
 Colocando em "suaSenha" o valor que desejar para sua senha do db.
 
 OBS: Lembre-se de usar a mesma senha no arquivo `.env`.
__________________________________

1. Modifique o arquivo `const-example.env.js` usando as instruções em comentário dentro dele.

2. Instale as dependências com o comando `npm install`

3. Para rodar a aplicação, rode o comando `npm start`.
 
4. Caso queira modificar o código, rode em modo de desenvolvedor usando o comando `npm run dev` para o app ser atualizado automaticamente.

5. Para testar as operações CRUD é uma boa opção utilizar o Thunder Client (extensão do VSCode).
