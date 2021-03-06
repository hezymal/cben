import React from 'react';
import PropTypes from 'prop-types';
import Boxer from './Boxer';
import styles from '../styles';

const Fight = ({ id, red, blue }) => (
  <div className={styles.fight}>
    <Boxer id={red.id} name={red.name} />
    {" - "}
    <Boxer id={blue.id} name={blue.name} />
  </div>
);

Fight.propTypes = {
  id: PropTypes.number.isRequired,
  red: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  blue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Fight;
