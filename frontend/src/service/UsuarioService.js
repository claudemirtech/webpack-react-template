import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;

const BASE_URL = '/api/usuario'
export class UsuarioService {

    static getUsuarios() {
        return axios.get(`${BASE_URL}`);
    }

    static getUsuario(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    static salvar(usuario) {
        return axios.post(`${BASE_URL}`, usuario);
    }

    static editar(id, usuario) {
        return axios.put(`${BASE_URL}/${id}`, usuario);
    }

    static remover(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }

}