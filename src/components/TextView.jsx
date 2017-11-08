import React from 'react';
import PropTypes from 'prop-types';

const TextView = ({ text }) => (
  <h1>{text}</h1>
);

TextView.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextView;