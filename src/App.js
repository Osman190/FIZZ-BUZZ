import React, { Component } from "react";
import FizzBuzz from "./components/FizzBuzz/FizzBuzz.js";
import Content from "./components/Content/Content.js";
class App extends Component {
  state = {
    array: [],
    limit: 50,
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
        <h1>Fizz-Buzz Math</h1>
        <p>
          The Numbers limit are{" "}
          <strong>
            <b>50</b>
          </strong>{" "}
          and displayed depending on Math if the number multiples of 3 shows instead{" "}
          <strong>Fizz</strong>, if the number multiples of shows instead <strong>Buzz</strong>, if
          the number multiples of 3 and 5 shows instead <strong>FizzBuzz</strong> or if the number
          none of the other rules shows the number itself.
        </p>
        {this.renderContent()}
        <br />
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
