import axios from 'axios';

export const updateEvents = (dispatch) =>
  axios
    .get('/update')
    .then(response => dispatch({
      type: 'UPDATE_EVENTS',
      events: response.data,
    }));
