// Action creators

/*Function to add 1.
*amplify one to the tally store*/
export const add = (state) => ({
  ...state,
  count: state.count + 1
});

/*Function to subtract 1.
*Deduct 1 from Tally store*/
export const subtract = (state) => ({
  ...state,
  count: state.count - 1
});

/*Function to reset Tally app
*reset state*/
export const reset = (state) => ({
  ...state,
  count: 0
});
