import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './components/A';
import B from './components/B';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loaded: false,
      btnText: 'LOAD DATA!'
    }

    this.loadData = this.loadData.bind(this);
  }

  loadData() {
      console.log('AJAX CALL');

      this.setState({btnText: 'LOADING......'});

    setTimeout(() => {
      this.setState({loaded: true});
    }, 3000)  
  }

  componentDidMount() {
    // console.log('AJAX CALL');

    // setTimeout(() => {
    //   this.setState({loaded: true});
    // }, 3000)
  }

  render() {

    if (!this.state.loaded) {
      return (<B btnText={this.state.btnText}  loadData={this.loadData}/>)
    }else {
      return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
  
        <div>
          <h1>React APPlication!</h1>
          <A x={1} />
        </div>
      );
    }

  }
}

export default App;
