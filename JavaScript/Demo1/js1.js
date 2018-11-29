// variables
// var, let, const 

const a = 5;
// a = 6;

// Var is function scoped, let and const are block scoped.

{
    var b = 5;
    let c = 6;
    const d = 7;
}

// console.log(b);
// console.log(c);
// console.log(d);

function x() {
    {
        var v = 1;
        // let v = 1;
    }

    function y () {
        // var v = 2;
        console.log(v);
    }

    y();

    console.log(v);
}

// x();

// SCOPE flows inside out, Each funtion has its own local enviornment.

// DATA TYPES.

// PRIMITIVE -

// Number
// String
// Boolean 
// null
// undefined
// Symbol

// BY VALUE
let a1 = 1;
let b1 = a;
b1 = 5;
// console.log(a1);
 {
    let s1 = 'x';
    let s2 = "x";
    // let s3 = s1 + s2 + 'yzzzzz.....';
    let s3 = `${s1}${s2}yzzzzz.....`;  // String Interpolation
    // console.log(s3);
 }

 {
    let s1 = 'y';
    let s2 = "y";
    // let s3 = s1 + s2 + 'yzzzzz.....';
    let s3 = `${s1}${s2}yzzzzz.....`; 
    // console.log(s3);
 }

 // Boolean
 // Falsy -> 0, '', null, undefined, false, NaN

 {
     let a;
     console.log(Boolean(a)); // Value is not assigned
 }

 {
     let user;
    //  user = 0; 
    // user = null;

     if (user) {
         console.log(`Hello ${user}`);
     }
 }

 {
     for (let i = 6; i < 5; i++) {
         console.log(i);
     }

     let i = 6;
     while(i < 5) {
         console.log(i);
         i++;
     }
 }


 // OBJECT TYPE : Complex. -> object, Array, functions || work BY REFERENCE

//  FUNCTIONS - functions and var get hoisted (Memory location gets allocated).
function f1() {
    var gvar = 10;

    function f2() {
        console.log('f2');
    }
}
{
    // let gvar;
    // console.log(gvar);
    x();
    // console.log(a11);

    function x() {
        // console.log('x');
    }

    var a11 = 5;
    // console.log(a11);
     // CALL
}

// Function first-class | can be moved into varible, passed as an arguement, can be returned from another function

{
    let a = 5;
    // b();
    var b = function () {
        console.log('Anonymous Function');

        return function bNest() {
            console.log('Nest');
        }

        // return function() {
        //     console.log('RETURNED function')
        // }
    }

    let refBnest = b();
    // refBnest();

    // b();

    function x(a) {
        let y = a();
        y();
    }
    // let x = b();
    // x(b);
    // x(function() { console.log('INLINE function')});
}

// ARROW Fucntions

{
    // let b = function () {
    //     console.log('ANON');
    // }

    let b = () => { console.log('ANON'); };

    // let double = function (a) {
    //     return a * 2;
    // }

    let double = a => a*2; // If only one arguement skip (), if no logic except for return no need to wrap within {}

    console.log(double(2));
}

// OBJECTS - keyed collection
{
// let a = new Object();
// let a = {};
    let a = {
        x: 1,
        y: 'askvibav',
        z: true
    }

    // a.k = 'run_time';
    // a['k'] = 'run_time';
    let key = 'k';
    a[key] = 'run_time';
    // console.log(a);

    const b = {x: 1}; // 0 x 2598211
    b.y = 10; // 0 x 2598211 is still same

    // b = {}; // 0x98q25482

    // console.log(b);

    // for...in loop

    // for (let key in b)  {
    //     console.log(b[key]);

    // }

    // INHERITANCE - Prototypal
    console.log(b.z);

    let c = {z: 15, f1: () => {console.log('c_property')}};
    let d = {m : 20, f: () => {console.log('d_property')}};
    b.__proto__ = c;
    c.__proto__ = d;
    console.log(b.f());

    for (let key in b)  {
        // console.log(b.hasOwnProperty(key));
        if (b.hasOwnProperty(key)) {
            console.log('do_something')
        }
        

    }


}

{   // User to create objects. new Object, {}
    function X(n, p) {

        this.name = n;
        // this.calcPerc = () => {
        //     let per = p;
        //     return per;
        // }
    }

    X.prototype = {
        calcPerc: function() {
            console.log('COMMON_CALCULATOR', this);
            return 75;
        }
    }

    let user1 = new X('A', 75);
    let user2 = new X('B', 85);
    let user3 = new X('C', 96);
    let user4 = new X('D', 98);
    // console.log(user1);
    // console.log(user2);
    // console.log(user3);
    // console.log(user4);

    // console.log(user1.calcPerc());
    // console.log(user1.__proto__);
    // console.log(user2.calcPerc());
    // console.log(user3.calcPerc());
    // console.log(user4.calcPerc());
}

{
    // let arr = new Array();
    let arr = [1, '3', {x: 1}, false];
    console.log(arr);
}


{
    function apiCall() {
        // 2MB of data
        let data = 'xasfasvasvav';

        // document.getElementById('id').appendChild();
    }

    apiCall('1');
    apiCall('2');
}






