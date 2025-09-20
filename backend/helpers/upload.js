const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({


    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/imagens/'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Adiciona timestamp ao nome do arquivo
    }
})

const fileFilter = function (req, file, cb) {
    
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null, true);
    } else {
        cb(new Error('Apenas arquivos JPEG, PNG e JPG são permitidos!'), false);
    }
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = upload;