const mongoose = require('mongoose');
const { Schema } = mongoose;

const comentariosSchema = new Schema({

    nome: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }

})


const postagemSchema = new Schema({

    titulo: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    favorito: {
        type: Boolean,
    },

    comentarios: [comentariosSchema]
    
}
, { timestamps: true }
);

module.exports = mongoose.model('Postagens', postagemSchema);