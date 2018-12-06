const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017').then(() => {
    app.listen(port, () => {
        console.log('Servidor AYShop Iniciado...');
    })
}).catch(() => {
    console.log('No se ha podido conectar a la BD');
});