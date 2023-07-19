const Sequelize = require('sequelize');
const { database } = require('../database');

exports.Usuario = database.define('usuario', {
    cdusuario: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
    ativo: Sequelize.BOOLEAN
});