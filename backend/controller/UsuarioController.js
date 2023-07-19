const {createUsuario, deleteUsuario, getUsuarioById, getUsuarios, updateUsuario} = require('../service/UsuarioService');
const { validarToken } = require('../util/ValidadorUtil');

module.exports = (express) => {

    const router = express.Router();

    router.route('/api/usuario').get(async (req, res, next) => {
        validarToken(req, next);
        res.status(200).json(await getUsuarios());
    });

    router.route('/api/usuario/:id').get(async (req, res, next) => {
        validarToken(req, next);
        res.status(200).json(await getUsuarioById(req.params.id));
    });

    router.route('/api/usuario').post(async (req, res, next ) => {
        validarToken(req, next);
        const { body } = req;
        const response = createUsuario(body);
        res.status(200).json(response)
    });

    router.route('/api/usuario/:id').put(async (req, res, next) => {
        validarToken(req, next);
        const { body } = req;
        const response = updateUsuario(req.params.id, body);
        res.status(200).json(response);
    });

    router.route('/api/usuario/:id').delete(async (req, res, next) => {
        validarToken(req, next);
        const response = deleteUsuario(req.params.id);
        res.status(200).json(response);
    });

    return router;
};


