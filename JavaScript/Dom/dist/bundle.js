"use strict";

// THIS in JS

var a = {
    x: 2,
    f: function f() {
        console.log(this);
        // console.log(this.x);

        // let int = () => {
        //     console.log(this.x);
        // }
        var self = this;
        function int() {
            console.log(self.x);
        }

        int();

        // return int;

    }
};

var b = {
    x: 3
};

var fn = a.f;
b.f = a.f;
// a.f();
// b.f();
// fn();

setTimeout(b.f, 0);

// bind call and apply

var fn1 = a.f.bind(a);
var fn2 = a.f.bind(b);

fn1();
// a1();
fn2();

// setTimeout(fn) {
//     // after 1 second

//     fn();
// }

// Variable Env, a reference to outer env, THIS!!!
