import lodash from 'lodash';

const events = (state = [], action) => {
  if (action) {
    switch (action.type) {
      case 'UPDATE_EVENTS':
        return state.concat(action.events);
    }
  }

  return state;
};

export default events;