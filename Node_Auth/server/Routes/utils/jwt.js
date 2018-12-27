const jwt = require('jsonwebtoken');

module.exports = {
    generateJWT: (req, res) => {
        res.send(jwt.sign({ id: req.userId }, 'secretSalt', { expiresIn: 10 }));
    },

    validateJWT: (req, res, next) => {
        const token = req.headers.auth;
        // console.log(token);
        let decoded;
        try {
            decoded = jwt.verify(token, 'secretSalt');
            console.log(decoded);
            req.userId = decoded.id;
            next();
        }catch(err) {
           res.send('Invalid Token - Not allowed to access SSN');
        }

        // console.log(decoded);

        // if (!token) {
        //     res.send('Need a valid token')
        // } else {
        //     next();
        // }
    }
}