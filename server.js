const jsonServer = require('json-server');
const cors = require('cors'); // Importar CORS
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Configuração adicional de CORS
const corsOptions = {
  origin: '*', // Permitir requisições de qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};
server.use(cors(corsOptions)); // Ativar CORS com opções personalizadas

server.use(middlewares);
server.use(router);

// Porta definida pelo Render ou padrão 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}`);
});
