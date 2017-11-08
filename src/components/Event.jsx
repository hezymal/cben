import React from 'react';
import PropTypes from 'prop-types';
import Fight from './Fight';
import Styles from './Styles';

const Event = ({ id, location, date, fights }) => (
  <div className={Styles.Event}>
    <header>
      {location} #{id}
    </header>
    <div>
      <span>Дата: </span>
      <strong>{date.toLocaleDateString()}</strong>
    </div>
    <div>
      <span>Кард: </span>
    </div>
    <section>
      {
        fights.map(fight => <Fight key={fight.id} id={fight.id} red={fight.red} blue={fight.blue} />)
      }
    </section>
  </div>
);

Event.propTypes = {
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  fights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    red: PropTypes.object.isRequired,
    blue: PropTypes.object.isRequired,
  }).isRequired).isRequired,
};

export default Event;
