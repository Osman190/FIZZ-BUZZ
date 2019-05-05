import React from "react";
import FizzBuzz from "./FizzBuzz.js";
import Content from ".././Content/Content.js";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test FizzBuzz Component", () => {
  it("is truthy", () => {
    expect(FizzBuzz).toBeTruthy();
    expect(Content).toBeTruthy();
  });

  it("writes Fizz", () => {
    const HocComponent = FizzBuzz(Content, 3);
    const text = Enzyme.shallow(<HocComponent />);
    expect(text.find(Content)).toBeTruthy();
    expect(
      text
        .find(Content)
        .render()
        .text()
    ).toEqual("Fizz");
  });

  it("writes Buzz", () => {
    const HocComponent = FizzBuzz(Content, 5);
    const text = Enzyme.shallow(<HocComponent />);
    expect(text.find(Content)).toBeTruthy();
    expect(
      text
        .find(Content)
        .render()
        .text()
    ).toEqual("Buzz");
  });

  it("writes FizzBuzz", () => {
    const HocComponent = FizzBuzz(Content, 0);
    const text = Enzyme.shallow(<HocComponent />);
    expect(text.find(Content)).toBeTruthy();
    expect(
      text
        .find(Content)
        .render()
        .text()
    ).toEqual("FizzBuzz");
  });

  it("writes content itself", () => {
    const HocComponent = FizzBuzz(Content, 2);
    const text = Enzyme.shallow(<HocComponent />);
    expect(text.find(Content)).toBeTruthy();
    expect(
      text
        .find(Content)
        .render()
        .text()
    ).toEqual("2");
  });
});
