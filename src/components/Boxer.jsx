import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';

const Boxer = ({ id, name }) => (
  <span className={Styles.Boxer}>
    {name}
  </span>
);

Boxer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Boxer;
