require('dotenv').config()
const express = require('express');

const loginController = require('./controller/LoginController')(express);
const usuarioController = require('./controller/UsuarioController')(express);

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.json());

app.use('/', loginController);
app.use('/', usuarioController);
app.use('/', express.static('./dist'));

app.listen(PORT, HOST, () => {
    console.log(`Server started on port ${PORT}`);
});
