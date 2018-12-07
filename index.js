const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
var passport = require('passport'); // Passport: Middleware de Node que facilita la autenticación de usuarios

// Importamos el modelo usuario y la configuración de passport
require('./models/user');
require('./passport')(passport);

const app = express();

// Conexión a la base de datos de MongoDB que tenemos en local
mongoose.connect('mongodb://localhost:27017/passport-example', function(err, res) {
    if (err) throw err;
    console.log('Conectado con éxito a la BD');
});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(morgan("dev"));

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/27017').then(() => {
//     app.listen(port, () => {
//         console.log('Servidor AYShop Iniciado...');
//     })
// }).catch(() => {
//     console.log('No se ha podido conectar a la BD');
// });