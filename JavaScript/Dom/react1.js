console.log(React); // to create elements
console.log(ReactDOM); // Used to send our React Element to html

// let a = React.createElement('h1', null, 'Hi from', React.createElement('span', null, ' React!'));

// JSX | JavaScript XML
// let a = <h1>Hi from <span>React!</span></h1>; // return an element (object) // Babel!

// let a = (<div><h1>Hi</h1><p>Hi for p!</p></div>);

// let name = 'React101'; // string, number, boolean, null, undefined, Array, JSX
// let n = 5;
// let bool = true;
// let x = null;
// let y = undefined;
// let arr = [1, 2, 4, 5]

// let j = <span>External JSX</span>;

// let aj = [<span>External JSX</span>, <span>External JSX</span>, <span>External JSX</span>]

// let a = (<div>
//     <h1>{aj}</h1> 
// </div>)

// + - * / ?: && ||

let marks = [90, 100, 50, 60, 20, 45];


let marksJSX = marks.filter(marks => marks >= 50).map((item, index) => {
    return (<p key={index}>S{index+1} : {item}</p>)
})

// console.log(marks)

console.log(marksJSX)

let j = (<div>
    <h1>MARKS</h1>
    {marksJSX}
</div>)

ReactDOM.render(j, document.getElementById('main'));

