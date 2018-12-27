const express = require('express');
const app = express();
const db = require('./server/DB/connect');
const userRoutes = require('./server/Routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Connected');
})

userRoutes(app);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen('8080', () => {
        console.log('Listening at 8080!!')
    })
});
