const express = require('express');
const app = express();

const path = require('path');


// ROutes and Middlewares

// Middlewares
// 1. Application Level
// 2. Route Level

// app.use((req, res, next) => {
//     console.log(Date.now());
//     next();
// })



// app.use((req, res, next) => {
//     console.log('Second APP LEVEL MIDDLEWARE');
//     let loggedIn = true;

//     if (loggedIn) {
//         next();
//     } else {
//         res.send('NOT ALLOWED TO ACCESS ROUTE');
//     }

// })

// express.static() -> Function -> can be used as application level middleware

// localhost:8080/images/node.jpg

// app.use((req, res, next) => {
    // console.log(__dirname);
    // next();
// })

// app.use(express.static(path.join(__dirname, '/public')));


app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
    let t = Date.now();
    req.time4Clinet = t;
    next();
})





app.get('/', (req, res) => {
    // console();
    res.send('Hello Express!');
    // res.sendFile(path.join(__dirname, '/public/index1.html'));
})


app.get('/second', (req, res, next) => {
    // console();
    // res.send('Second Route! ' + req.time4Clinet);

    next();
})

// app.get('/second', (req, res) => {
//     // console();
//     res.send('Second Route! ' + req.time4Clinet);
// })

app.get('/emp/:empCode', (req, res) => {
    res.send('Data of emp ' + req.params.empCode);
})

app.post('/saveEmp', (req, res) => {
    console.log(req.headers)
    console.log(req.body);
    res.send('Emp Saved');
})


let thridRouteMiddleWare1 = (req, res, next) => {
    if (true) {
        next();
    }else {
        res.end();
    }
}
app.get('/third', thridRouteMiddleWare1, (req, res, next) => {
    if (true) {
        next();
    } else {
        res.end();
    }
},  (req, res) => {
    res.send('Third');
    // res.end();
    // res.json({x: 1, y: 2});
})



app.get('*', (req, res) => {
    res.send('Incorrect URL!');
})


app.listen('8080', () => {
    console.log('Listening on 8080!')
})