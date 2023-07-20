const crypto = require('crypto');

exports.hashPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    return sha256.update(password).digest('hex');
}