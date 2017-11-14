import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const Boxer = ({ id, name }) => (
  <span className={styles.boxer}>
    {name}
  </span>
);

Boxer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Boxer;
