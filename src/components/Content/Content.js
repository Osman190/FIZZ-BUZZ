import React from "react";
import PropTypes from "prop-types";

const Content = props => {
  return (
    <div>
      <p>{props.value}</p>
    </div>
  );
};

Content.propTypes = {
  value: PropTypes.string.isRequired
};

export default Content;
