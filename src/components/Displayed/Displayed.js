import React from "react";

const displayed = (InnerComponent, num) => {
  const Displayed = () => {
    return <InnerComponent value={String(num)} />;
  };
  return Displayed;
};

export default displayed;
