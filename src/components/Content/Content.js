import React from "react";
import PropTypes from "prop-types";

const Content = ({ value }) => {
  return <div>{value}</div>;
};

Content.propTypes = {
  value: PropTypes.string
};

export default Content;
