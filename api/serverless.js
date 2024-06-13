import * as jsonServer from 'json-server'

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // seu arquivo de banco de dados JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req, res) => {
	server.handle(req, res);
};
