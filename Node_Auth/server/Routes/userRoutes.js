const User = require('./../DB/User/userSchema');
const { generateJWT, validateJWT } = require('./utils/jwt');


module.exports = ((app) => {

    app.get('/user', (req, res, next) => {
        res.send('User APIS active');
        // next();
    })

    // app.get('/user', (req, res) => {
    //     res.send('2');
    // })

    app.post('/user/register', (req, res) => {

        let {id, password, ssn } = req.body;
        let user = new User({
            id,
            password,
            ssn
        });

        user.save()
            .then(data => {
                res.send('Registered');
            })
            .catch(err => {
                res.send(err);
            })
    })

    app.post('/user/login', (req, res, next) => {

        let { id, password } = req.body;

        User.findOne({ id })
            .then(data => {
                if (!data) {
                    res.send('User not registerd');                    
                } else {
                    if (password === data.password) {
                        req.userId = id;
                        next();
                    } else {
                        res.send('Incorrect Password');
                    }
                }
            })
            .catch(err => {
                res.send('Error in looking up User ' + err);
            })
    }, generateJWT)


    // Private Route

    app.use(validateJWT);

    app.get('/user/ssn', (req, res) => {
        
        User.findOne( { id: req.userId })
            .then(data => {
                console.log(data);
                res.send('SSN ' + data.ssn);
            })
            .catch(err => {
                res.send('Error looking up in DB ' + err);
            })
    })


    app.get('/user/password', (req, res) => {
           
        User.findOne( { id: req.userId })
            .then(data => {
                console.log(data);
                res.send('Password ' + data.password);
            })
            .catch(err => {
                res.send('Error looking up in DB ' + err);
            })     
    })
})