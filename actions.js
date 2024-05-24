// Action creators

//Function to add 1.
export const add = (state) => ({
  ...state,
  count: state.count + 1
});

//Function to subtract 1.
export const subtract = (state) => ({
  ...state,
  count: state.count - 1
});

//Function to reset Tally app
export const reset = (state) => ({
  ...state,
  count: 0
});
