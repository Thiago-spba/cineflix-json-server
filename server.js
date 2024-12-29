const jsonServer = require('json-server');
const cors = require('cors'); // Importar CORS
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Ativar CORS para permitir requisições de outros domínios
server.use(middlewares);
server.use(router);

// Corrigir para usar a porta definida pelo Render ou a padrão 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}`);
});
