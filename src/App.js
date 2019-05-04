import React, { Component } from "react";
import FizzBuzz from "./components/FizzBuzz/FizzBuzz.js";
import Content from "./components/Content/Content.js";
class App extends Component {
  state = {
    array: [],
    limit: 20,
    counter: 1
  };

  decrement = () => {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  increment = () => {
    if (this.state.counter < this.state.limit) {
      this.setState({ counter: this.state.counter + 1 });
    }
  };

  renderContent = () => {
    const array = [...this.state.array];
    let counter = this.state.counter;
    const limit = this.state.limit;
    for (let i = 1; i <= limit; i++) {
      if (counter === i) {
        const TextComponent = FizzBuzz(Content, i);
        array.push(<TextComponent key={i} />);
      }
    }
    return array;
  };

  render() {
    return (
      <React.Fragment>
        {this.renderContent()}
        <button onClick={this.decrement} className="">
          -
        </button>
        <button onClick={this.increment} className="">
          +
        </button>
      </React.Fragment>
    );
  }
}

export default App;
