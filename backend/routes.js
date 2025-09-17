const express = require('express');

const router = express.Router();

const {
    CriarPostagem,
} = require('./controllers/PostagensController');

router.post('/', (req, res) => CriarPostagem(req, res));


module.exports = router;