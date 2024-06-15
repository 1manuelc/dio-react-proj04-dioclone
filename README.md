# Clone da DIO
<div>
  <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='React'>
  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='JavaScript'>
  <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='React Router DOM'>
  <img src='https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white' alt='React Hook Form'>
  <img src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' alt='Styled Components'>
  <img src='https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white' alt='Vite'>
  <img src='https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white' alt='Yarn'>
</div>


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

obs: este projeto foi prototipado usando Figma, caso queira implementá-lo com base no protótipo para fins de estudo [acesse o protótipo clicando aqui](https://www.figma.com/design/yhW9LAMJkf5aPepJL1RyMt/DIO-Clone-Remake?node-id=0-1&t=ILKif7X86Qv0r87w-1).

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
