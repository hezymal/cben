import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ id, location, date }) => (
  <div className="event-list__item">
    {"#"}{id}. {location} {date.toString()}
  </div>
);

Event.propTypes = {
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Event;
