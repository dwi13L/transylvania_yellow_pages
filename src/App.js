import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `hello`,
    };
  }

  handleButtonClick = () => {
    this.setState(
      /**
       * Access to current state is available as an argument to the functions
       */
      () => {
        return { text: `Good bye` };
      }, //updater function that returns an object that will be set as the state

      (state) => {
        console.log(state.text);
      } //callback function that executes post async update
    );
  };

  render() {
    return (
      <div className="app">
        <p> {this.state.text}</p>
        <br />
        <button onClick={this.handleButtonClick}>Leave</button>
      </div>
    );
  }
}
