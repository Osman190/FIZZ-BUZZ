import React from "react";

const Displayed = (InnerComponent, num) => {
  const displayed = () => {
    return <InnerComponent value={String(num)} />;
  };
  return displayed;
};

export default Displayed;
