const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', true);

async function main() {

    await mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.3vhhbl4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log('Conectou ao MongoDB Atlas!');

}


main().catch((err) => console.log(err));

module.exports = main;