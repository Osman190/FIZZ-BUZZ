import React from "react";
import Content from "../Content/Content.js";

const displayed = (InnerComponent, num) => {
  const Displayed = () => {
    return (
      <InnerComponent>
        <Content value={num} />
      </InnerComponent>
    );
  };
  return Displayed;
};

export default displayed;
