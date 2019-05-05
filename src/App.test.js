import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe(" App tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("the state of array", () => {
    const div = document.createElement("div");
    var app = mount(<App />);
    const array = app.state().array;
    expect(array).toEqual([]);
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("the state of counter", () => {
    const div = document.createElement("div");
    var app = mount(<App />);
    const counter = app.state().counter;
    expect(counter).toEqual(1);
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
