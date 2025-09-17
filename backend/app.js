const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./db/conn');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = process.env.PORT || 3000;

const postagemRoutes = require('./routes');

app.use('/Postagens', postagemRoutes);

// Executa a conexão com o banco e inicia o servidor
async function startServer() {
  try {
    await connectToDB(); // Aguarda conexão com o MongoDB
    app.listen(port, () => {
      console.log(`O servidor está na porta: ${port}`);
    });
  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
  }
}

startServer();