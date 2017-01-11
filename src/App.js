// bring in React & Component instance from React lib
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// local variables
const buttonStyle = {
  marginRight: 16,
};

// Component definition
class Hello extends Component {
    // when our components is initialized
    // the constructor is called
    constructor(props){

      // make a call to the parent class's Component constructor 
      super();

      // define a initial state
      this.state = {
        counter: 0, // initializing this.state.counter to be 0
        newName: '',

      };
    }

  handleClick(event) {
    // setState will explicitly mutate the state
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  handleResetCounter() {
    this.setState({
      counter: 0,
    });
  }

  handleCountbyTen(){
    this.setState({
      counter: this.state.counter + 10,
    });
  }

  handleChangeName(event){
    this.setState({
      newName: event.target.value,
    });
  }



  // the Component will render this
  render() {

    // must return some UI here    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h1>Hello {this.state.newName || this.props.name}!</h1>
          <p>You are {this.props.age} years old</p>
          <p>Counter is -> {this.state.counter}</p>
          
          <button style={buttonStyle} onClick={(event) => this.handleClick(event)}>
          Click Me!
          </button>

          <button style={buttonStyle} onClick={(event) => this.handleResetCounter(event)}>
          Reset!
          </button>

          <button style={buttonStyle} onClick={(event) => this.handleCountbyTen(event)}>
          Increment by Ten!
          </button>
          <input type="text" onChange={(event) => this.handleChangeName(event)} />


          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default Hello;
