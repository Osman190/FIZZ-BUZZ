import React from "react";
import PropTypes from "prop-types";

const Content = ({ value }) => {
  return <div className="text">{value}</div>;
};

Content.propTypes = {
  value: PropTypes.string
};

export default Content;
