// console.log('executed by node');

// const u = require('./utils');
// import { b } from './utils';

// console.log(u);
// console.log(b);

// COMMONJS


// setTimeout(() => {
//     console.log('1')
// }, 10000)

// setTimeout(() => {
//     console.log('2')
// }, 1000)

// console.log('3');


// http

// const http = require('http');

// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//   }).listen(8080); //the server object listens on port 8080


// EXPRESS

const express = require('express');
const app = express();
const path = require('path');

// GET, POST, PUT, DELETE
console.log(__dirname);
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname + '/public/index1.html'));
    // res.json({x: 2})
    // send
    // sendFile
    // end
    next();
})

app.get('/', (req, res) => {
    res.send('SECOND');
})


app.listen('8080', function() {
    console.log('LISTENING TO 8080!')
});































