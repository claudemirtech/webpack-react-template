const { Usuario } = require('../model/Usuario.js');
const { hashPassword } = require("../util/SenhaUtil");

exports.getUsuarios = async () => {
    return await Usuario.findAll();
}

exports.getUsuarioById = async (id) => {
    return await Usuario.findByPk(id);
}

exports.createUsuario = async (usuario) => {
    usuario.senha = hashPassword(usuario.senha);
    return Usuario.create(usuario);
}

exports.updateUsuario = async (id, usuario) => {
    usuario.senha = hashPassword(usuario.senha);
    return Usuario.update(usuario, { where: { cdusuario: id } });
}

exports.deleteUsuario = async (id) => {
    return await Usuario.destroy({ where: { cdusuario: id } })
}