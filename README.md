# Clone da DIO

Este projeto objetiva clonar as páginas de Home, Login, Cadastro e Feed inicial da plataforma Digital Innovation One, como desafio para conclusão de módulo prático do bootcamp React Web Developer da mesma plataforma.

[Deploy atualizado na Vercel](https://dio-react-proj04-dioclone.vercel.app/)

## Funcionalidades básicas
* Páginas com experiência do usuário simples e responsividade aprimorada.
* Cadastro de usuário funcional, que verifica existência do email no banco de dados emulado para não cadastrar no mesmo.
* Login funcional, verificando existência do email e se a senha está correta para conceder acesso, mostrando mensagens de erro no formulário.

## Implementação
O projeto foi feito em `React` e construído utilizando `Vite`, utilizando como base as dependências:
* `react-router-dom`: para roteamento das páginas.
* `styled-components`: para estilização de componentes.
* `react-icons`: para utilização de ícones.
* `react-hook-form`: para lidar com formulários de autenticação.
* `yup`: para validar os formulários de autenticação.
* `axios`: para fazer requisições de obtenção e criação de usuários.
* `json-server`: para emular um servidor local através de um arquivo json com os dados.
* `vercel`: para utilizar funcionalidades serverless e redirecionar chamadas à API em ambiente de produção.

## Executando a aplicação localmente
Para executar a aplicação do projeto, você precisa:

1. Clonar este repositório ou fazer um fork: <br/>
`git clone https://github.com/1manuelc/dio-react-proj04-dioclone.git`

2. Instalar as dependências necessárias á partir do seu gerenciador de pacotes (não é obrigatório ser npm): <br/>
`npm install`

3. Executar os dois comandos em terminais distintos: <br/>
```bash
npm run api
```
```bash
npm run dev
```
(O primeiro comando executa localmente uma instância do json-server para emular uma api externa, enquanto o segundo serve a aplicação localmente)
