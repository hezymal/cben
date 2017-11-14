import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Event from "../components/Event";
import { updateEvents } from "../actions";
import styles from "../styles";

const EventListView = ({ events, onUpdateEvents }) =>
  <div className={styles["event-list"]}>
    <header>
      Расписание
    </header>
    <section>
      {events.map(event =>
        <Event
          key={event.id}
          id={event.id}
          location={event.location}
          date={event.date}
          fights={event.fights}
        />
      )}
    </section>
    <footer>
      <button onClick={onUpdateEvents}>Обновить</button>
    </footer>
  </div>;

EventListView.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      fights: PropTypes.array.isRequired
    }).isRequired
  ).isRequired,
  onUpdateEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateEvents: () => updateEvents(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListView);
