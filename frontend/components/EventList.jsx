import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Event from './Event';
import Styles from './Styles';

const EventListView = ({ events, onAddRandomItemClick }) => (
  <div className={Styles.EventList}>
    <header>
      Список событий
    </header>
    <section>
      {
        events.map(
          event => 
            <Event 
              key={event.id} 
              id={event.id} 
              location={event.location} 
              date={event.date}
              fights={event.fights} />
        )
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
    fights: PropTypes.array.isRequired,
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
