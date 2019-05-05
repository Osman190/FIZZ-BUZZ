import React from "react";
import PropTypes from "prop-types";

const Content = props => {
  return <div className="text">{props.children.props.value}</div>;
};

Content.propTypes = {
  props: PropTypes.string
};

export default Content;
