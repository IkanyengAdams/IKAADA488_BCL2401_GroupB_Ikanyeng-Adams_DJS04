// Action creators
export const add = (state) => ({
  ...state,
  count: state.count + 1
});

export const subtract = (state) => ({
  ...state,
  count: state.count - 1
});

export const reset = (state) => ({
  ...state,
  count: 0
});
