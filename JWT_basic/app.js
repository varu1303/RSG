// Hash vs Encode vs Encryption (symmetric key or public key)

// https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/#encoding

// Hashing
// The same input will always produce the same output. 
// Any modification of a given input should result in drastic change to the hash.
// Hash is not reversible.

// header.payload.signature

// data = base64urlEncode( header ) + “.” + base64urlEncode( payload )
// hashedData = hash( data, secret )
// signature = base64urlEncode( hashedData )


// It is important to understand that the purpose of using JWT is NOT to hide or obscure data in any way.
// It's purpose is to prove that the sent data was actually created by an authentic source.


// crypto-js - SHA256 (string).toString() 

// data + hash (data + salt)

// jwt.sign(data, secret) [token] - jwt.verify(token, secret) [get data]

// const { SHA256 } = require('crypto-js');

// let input = 'Message1';
// let hash = SHA256(input).toString();

// // console.log(SHA256(input).toString());

// // console.log(SHA256(input).toString());
// // console.log(SHA256(input).toString());
// // input = 'Message2';
// // console.log(SHA256(input).toString());
// // console.log(SHA256(input).toString());

// let id = '101';

// let token = {
//     id,
//     hash: SHA256(id + 'secret').toString()
// }

// console.log(token);

// // token will be sent to the backend... backend will read the id, hash(id) 

// console.log({
//     id: '102',
//     hash: SHA256('102').toString()
// })

// console.log(SHA256('102' + 'secret').toString())

const jwt = require('jsonwebtoken');

let token = jwt.sign({ id: '101'}, 'secret');
console.log(token);

// console.log(token.payload)

let decoded = jwt.verify(token, 'secret');
console.log(decoded);

// header.payload.signature
// header contains information about the jwt [Encoded]
// payload is the data which we used to create the token [Encoded]
// Signature - hashed!! ( header + payload + secret )
