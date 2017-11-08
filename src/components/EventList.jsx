import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Event from './Event';

const EventListView = ({ events, onAddRandomItemClick }) => (
  <div className="event-list">
    <section>
      {
        events.map(function(event) {
          return <Event key={event.id} id={event.id} location={event.location} date={event.date} />;
        })
      }
    </section>
    <footer>
      <button onClick={onAddRandomItemClick}>Add Event</button>
    </footer>
  </div>
);

EventListView.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired).isRequired,
  onAddRandomItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddRandomItemClick: () => {
      dispatch({
        type: 'ADD_RANDOM_ITEM_EVENT'
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListView);
