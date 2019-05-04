import React from "react";
import Content from "./Content.js";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Text Component", () => {
  it("is truthy", () => {
    expect(Content).toBeTruthy();
  });

  it("render text", () => {
    const text = Enzyme.shallow(<Content num={"Test"} />);
    expect(text.text()).toEqual("Test");
  });
});
