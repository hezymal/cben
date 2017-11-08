import lodash from 'lodash';

const events = (state = [], action) => {
  if (action) {
    switch (action.type) {
      case 'ADD_RANDOM_ITEM_EVENT':
        return [
          ...state,
          {
            id: lodash.maxBy(state, item => item.id).id + 1,
            location: 'USA',
            date: new Date(),
          },
        ];
    }
  }

  return state;
};

export default events;