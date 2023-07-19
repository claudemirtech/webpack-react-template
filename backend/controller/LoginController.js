const jwt = require('jsonwebtoken');
const { Usuario } = require('../model/Usuario');
const { hashPassword } = require('../util/SenhaUtil');

module.exports = (express) => {

    const router = express.Router();

    router.route("/login").post(async (req, res, next) => {
        const { email, senha } = req.body;
        let existingUser;
        try {
            existingUser = await Usuario.findOne({ where: { email: email } });
        } catch {
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }
        if (!existingUser || existingUser.senha !== hashPassword(senha)) {
            const error = Error("Wrong details please check at once");
            return next(error);
        }
        let token;
        try {
            //Creating jwt token
            token = jwt.sign(
                { userId: existingUser.cdusuario, email: existingUser.email },
                "secretkeyappearshere",
                // { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: {
                userId: existingUser.cdusuario,
                email: existingUser.email,
                token: token,
            },
        });
    });

    return router;
};