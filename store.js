/**
 * @typedef {object} State
 * @prop {number} count
 */

/**
 * @callback Notify
 * @param {State} next
 * @param {State} prev
 */

/**
 * @callback Action
 * @param {State} state
 * @returns {State}
 */

/**
 * @callback Update
 * @param {Action} action
 */

/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 * @callback EmptyFn
 */

/**
 * @typedef {object} Store
 * @prop {Update} update
 * @prop {Subscribe} subscribe
 * @prop {() => State} getState
 */

// Initial state
const initial = {
  count: 0
};

/**
 * @type {Array<State>}
 */
const state = [initial];

/**
 * @type {Array<Notify>}
 */
let notifiers = [];

/**
 * @param {Action} action
 */
export const update = (action) => {
  if (typeof action !== "function") {
    throw new Error("action is required to be a function");
  }

  const prev = Object.freeze({ ...state[0] });
  const next = Object.freeze({ ...action(prev) });

  const handler = (notify) => notify(next, prev);
  notifiers.forEach(handler);
  state.unshift(next);
};

/**
 * @param {Notify} notify
 * @returns {EmptyFn}
 */
export const subscribe = (notify) => {
  notifiers.push(notify);

  const unsubscribe = () => {
    notifiers = notifiers.filter((current) => current !== notify);
  };

  return unsubscribe;
};

/**
 * @returns {State}
 */
export const getState = () => {
  return state[0];
};

// Exporting store object with methods
export const store = {
  update,
  subscribe,
  getState
};
