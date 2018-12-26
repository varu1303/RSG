console.log('UTILS');

// 2 ways to export

// Named exports

const A = 15;

const B = 12;

function F() {
    console.log('Function F', A);
}

// F();
// default export - only 1 default export per file

function Login() {
    console.log('Default export');
}

export default {
    A,
    B,
    F,
    Login
}

