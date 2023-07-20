const jwt = require('jsonwebtoken');

const varificaToken = (token) => {
    // Decoding the token
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secretkeyappearshere');
        return ({ success: true, data: { userId: decodedToken.userId, email: decodedToken.email } });
    } catch (err) {
        console.log(err);
        throw new Error('Invalid token')
    }
}

exports.validarToken = (req, next) => {
    // Authorization: 'Bearer TOKEN'
    let token;
    try {
        token = req.headers.authorization.split(' ')[1];
        varificaToken(token);
    } catch (err) {
        console.log(err);
        const error = new Error('Error! Something went wrong with the authenticate.');
        return next(error);
    }
}