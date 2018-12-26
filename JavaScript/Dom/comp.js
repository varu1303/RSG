// React Componets : JS Functions they return Objects (React Elements)

// Functional Components

// let pCall = ['A', 'B', 'C'];

// function C1() {
//     return (
//         <div>
//             <h1>Functional Components</h1>
//             {pCall.map((name, i) => {
//                 return (
//                     <Person name={name} key={i} />
//                 )
//             })}
//         </div>
//     )
// }

// function Person(props) {
//     console.log(props);
//     return (
//         <p>{props.name}</p>
//     )
// }

// Class Based Components

// class C1 extends React.Component {

//     constructor(props) {
//         super(props);
//         console.log(props);
//         this.name = props.name;
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Name : {this.name}</h1>
//             </div>
//         )
//     }
// }

// Event Handling!!

// function handleClick() {
//     a = 'HIDE';
//     ReactDOM.render(<EH name='A' />, document.getElementById('main'));
// }

// let a = 'SHOW';

// function EH() {
//     return (<div>
//         <button onClick={handleClick}>{a}</button>
//     </div>)
// }


class EHC extends React.Component { // LifeCycle Hooks

    // CREATION PHASE : constructor componentWillMount render ComponentDidMount
    // UPDATE PHASE: 2 branches
    // 1. When its own state is updated: shouldComponentUpdate componentWillUpdate render componentDidUpdate
    // 2. Parent gets updated : componentWillReceiveProps shouldComponentUpdate  componentWillUpdate render componentDidUpdate
    // UMOUNT PHASE
    constructor(props) {
        super(props);

        this.state = {
            a: 'SHOW'
        }
        this.b = props.name;
        // this.a = 'SHOW!!!!!';
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {
        console.log('WILL_UPDATED_EHc')
    }

    componentDidUpdate() {
        console.log('DID_UPDATED_EHc')
    }

    handleClick() {
        console.log('CLICKED', this.b);
        // this.state.a = 'HIDE';
        let nv = this.state.a === 'SHOW' ? 'HIDE' : 'SHOW';

        this.setState({a: nv});
        // setTimeout(() => {
        //     console.log('ONE')
        // }, 0)
        console.log(this.state.a);
    }



    render() {
        // let a = 'xxasvavav';
        // console.log(a);
        console.log('RENDERING')


        return (
            <div>
                <button onClick={this.handleClick}>{this.state.a} - {this.b}</button>
                <EHC2 />
                {this.state.a === 'SHOW' && <Child text={this.state.a}/>}
            </div> 
        )
    }
}

class EHC2 extends React.Component {

    componentWillUpdate() {
        console.log('COMPONENT_WILL_UPDATE_EHC2');
    }
    
    render() {
        return (
            <h3>EHC2!!!</h3>
        )
    }
}

function Child(props) {
    return (
        <h3>Function {props.text}</h3>
    )
}

function A() {
    return (
        <div>
            <EHC name='1' />
            <EHC name='2' />
            <EHC name='3' />
        </div>
    )
}

class Mul2 extends React.Component {

    constructor() {
        super();

        this.state = {
            var: 1
        }

        this.mult = this.mult.bind(this);
    }

    mult() {
        this.setState((prevState) => {
            console.log(prevState)
            return ({
                var: (prevState.var * 2)
            })
        })
    }
    
    render() {
        console.log('RENDERING_Parent')
        return (
            <div>
                <C1 var={this.state.var} mult={this.mult}/>
            </div>
        )
    }
}

class C1 extends React.Component {

    constructor(props) {
        super();

        this.state = {
            counter: 1
        }

        this.fromC1 = this.fromC1.bind(this);
    }

    fromC1() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        console.log('RENDERING_C1')
        console.log(this.props)
        return (
            <Display var={this.props.var} mult={this.props.mult} fromC1={this.fromC1} counter={this.state.counter}/>
        )
    }
}

function Display(props) {
    return (<div><p onClick={props.mult}>{props.var} </p>
            <p><span onClick={props.fromC1}>   for C1 : {props.counter}</span></p></div>);
}

ReactDOM.render(<Mul2 />, document.getElementById('main'));
