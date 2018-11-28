# JavaScript
  
### Introduction
*JavaScript* was initially created to *add interactivity to Web Pages*.  

Initially it was called "LiveScript" but since Java was really popular at that time, it was decided to market it as something close to Java but it isn't the case.   

It is a scripting language which means it acts on an existing entity or system like Web Browsers.  
Let's take a command "Walk", it would require a Person to carry it out. Similarly in case of JavaScript commands, a system like Web Browser is required to carry them out and these systems need an Engine to understand these commands. Different Browsers come with different engines and to keep the language behavior consistent across different browsers these engines implement ECMA standards which tell how the language should behave. [Read More..](https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5)  

### JS in WebBrowsers

JS is platform-independent. It can run on platforms like NodeJS, Web Browsers etc.

In *Browsers* we can execute JavaScript by attaching a script to webpage.
**SCRIPT** tag is used to attach JS. It can be included in any part of HTML document. The script tag contains JavaScript code which is automatically executed when the browser meets the tag.

*Inline JS*  
```<script type="text/javascript"> alert('Inline JS') </script>```  


*External Scripts*  
```<script src="/path/to/script.js"></script>```


### Variables

A variable is named storage for data. 3 ways to create variables in JS.

**var, let, const**  
let and const are part of ES6. Before that we just had var as an option.

Major Differences:  
1. var is function scoped, let and const are block scoped
2. A const variable need to be assigned a value on declaration and we cannot reassign a value to it.
3. let and const do not get hoisted (Only functions and var gets hoisted).

### Data types

JavaScript is dynamically typed language. We need not declare type of a variable, it gets decided during run time and can at one moment be a string and later receive a numeric value.

Primitive DataTypes: can contain only a single thing  
1. Number -  both for integer and floating point numbers.
2. String - "" and '' are same. `` allow variable insertion. There is no character type.
3. Boolean - two values: true and false.
4. Null - a special value which has the sense of “nothing”
5. Undefined - special value is “value is not assigned”.
6. Symbol  
  

Object DataType: It is special. Arrays, Functions and Objects are of type object.  
  
 
- **typeof(x)** returns type of data in that variable

  
### Type Conversions  
Most of the time, operators and functions automatically convert a value to the right type. That’s called “type conversion”. Sometimes we need to explicitly do it,  

if x is a variable then  

ToString -> String(x)  
ToNumber -> Number(x) *Returns NaN (Not a Number) when x doesn't contain a number
ToBoolean -> Boolean(x) *null, undefined, empty string (''), 0, false, NaN are falsy, rest are true.

**Equality Check**  
In '==' type conversion happens implicitly first, a = 0 and b = '0' are equal. Strict equality '===' is recommended as it does not include type conversion a === b // false.  

Common operators -> **If-else, Ternary Operator, ||, &&, !**  
Loops -> While, for

### Functions  
declaring a function: function(keyword) x(name of the function) { .... }  
calling a function: x()  
if a function does not return any value, by default it is false. Functions are block scoped.  

Default Value for Arguements:  


```
function x(a = 2) {
    return a*2;
}

x() // value 4 is returned from this call, as we have set 2 as default value for arguement.
```  
**Scope** of functions work inside out. A function can access it's local variables and variables declared outside of it. Variables not declared in any function are called Global variables.  

**Hoisting**  
After parsing before execution. Functions and variables(only var) get moved on top of function they're inside in after the script gets parsed.  

**Function Expression**  
Functions in JS are special kind of objects, they can be stored in variables, returned from another function or can be passed as an arguement into another function.  

*Fucntion Expression*
```
let x = function a() {
    console.log('Anonymous Function);
}

// Function's reference is stored in variable x, calling a function declared using expression is same.  
x();
```
  
**Arrow Functions**
Shorthand to create functions, better than expression. 

```
let f1 = () => 5;
let f2 = a => a;
let f3 = (a,b) => a*b;

// Above function is same as

let sf1 = function() {
    return 5;
}

let sf2 = function(a) {
    return a;
}

let sf3 = function(a, b) {
    return a*b;
}
```  

### Objects  
objects are used to store keyed collections of various data and more complex entities.

let u = new Object(); // Constructor Syntax  
let u = {} // equivalent to above expression, preferred way.  

To create object with key-value pairs.  
```
let a = {
    x: 1,
    y: 2,
    z: 3
}

// To access keys

console.log(a.x);
console.log(a.y);

// a.x is equivalent to a["x"] -> if name of key is in a variable then below syntax is used.

let key = 'z';
console.log(a[key]);

// deleting a key

delete a.z;

let b = { [key] : 'variable passes the key' } 
// or
let b = {};
b[key] = 'same result';

// Property Shorthand
let name = 'ABC';
let c = {
    name: name,
    age: 10
} 
// same as
let c = {
    name,
    age: 10
}

// Checking if property exists

c.name !== undefined 
"name" in c // key's name has to be in quote
key in c // variable contains key


// For...in loop

for (key in c) {
    console.log(key);
}
```  

Objects work **by Reference** and not **by Value** like in case of primitves.

```
const a = {};
const b = 5;

a.name = 'x'; // it is ok. As 'a' still contains the same reference.
b = 10 // throws an error

object1 = object2 // does not create a copy but copies the reference and both variables point to same object. 

let dest = {};
Object.assign(dest, src1, src2);
```

**Prototypal Inheritance**
In JS, inheritance is supported through prototypes. Each object has \__proto__ property which points to an object and that object is seen as prototype (backup).

```
let a = {x: 1};
let b = {y: 2};
a.y // returns undefined but what if we can make 'b' object a's prototype

a.__proto__ = b;
a.y // returns 2!! since b is a's protoype any key/property which is not found in a  
    //is looked up in it's b (it's prototype) and if not found in b will be looked up in b'c prototpye.
```  

**hasOwnProperty** in for...in loop

### Array
Objects are keyed collection and Arrays are ordered collection, their type is Object. They are passed by reference.  

let arr = new Array();  
let arr = [];  
let a = [1, '2', {x: '3'}] // can have different data types  

Length: a.length  
for... loop to iterate over values  
a[0] a[1]  
Pop, push

**This, constructor function, Classes, Array Methods**




**_Summary_**   
JS code called "scripts" are executed as plain text and don't need a compilation step prior to execution. A special program called [the JavaScript Engine](https://en.wikipedia.org/wiki/JavaScript_engine) is responsible for converting script into machine code and executing it.  
Examples of different JS Engines: V8 (Google Chrome), SpiderMonkey (Mozilla Firefox). 






