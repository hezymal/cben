const empty = (state, action) => {
  return state || {
    text: '',
  };
};

export default empty;