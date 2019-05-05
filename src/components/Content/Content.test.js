import React from "react";
import Content from "./Content.js";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Content Component", () => {
  it("is truthy", () => {
    expect(Content).toBeTruthy();
  });

  it("render content", () => {
    const text = Enzyme.shallow(<Content value={"Test"} />);
    expect(text.text()).toEqual("Test");
  });
});
