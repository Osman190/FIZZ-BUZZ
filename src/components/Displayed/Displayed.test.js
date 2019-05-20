import React from "react";
import Displayed from ".././Displayed/Displayed.js";
import Content from ".././Content/Content.js";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Displayed Component", () => {
  it("is truthy", () => {
    expect(Displayed).toBeTruthy();
    expect(Content).toBeTruthy();
  });

  it("render Content component", () => {
    const TextWithString = Displayed(Content, "Test");
    const text = Enzyme.shallow(<TextWithString />);
    expect(text.find(Content)).toBeTruthy();
    expect(
      text.render().text()
    ).toEqual("Test");
  });
});
