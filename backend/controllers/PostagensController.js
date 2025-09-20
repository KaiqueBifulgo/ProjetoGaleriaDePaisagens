const Postagem = require('../models/Postagens');

const CriarPostagem = async (req, res) => {

    console.log('Rota de criar postagem acessada');

    res.json({ message: 'Rota de criar postagem funcionando!!' });
}

module.exports = { CriarPostagem };