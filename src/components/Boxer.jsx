import React from 'react';
import PropTypes from 'prop-types';

const Boxer = ({ id, name }) => (
  <span className="boxer-list__item">
    {name}
  </span>
);

Boxer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Boxer;
