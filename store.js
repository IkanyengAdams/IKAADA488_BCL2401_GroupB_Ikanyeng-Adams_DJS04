/**
 * @typedef {object} Item
 * @prop {number} value
 */

/**
 * @typedef {objects} state
 * @prop {Item} wind
 * @prop {Item} temperature
 * @prop {Item} humidity
 */

/**
 * @callback Notify
 * @param {State} next
 * @param {State} prev
 */

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

/**
 * @callback Update
 * @param {Action}
 */

/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 * @typedef {objects} store
 * @prop {Update} update
 * @prop {Subscribe} subscribe
 */



// initial store
const initial = {
   wind: {
    value: 1,
   },
   temperature: {
    value: 1,
   },
   humidity: {
    value: 1,
   },
};

/**
 * @type {Array<State>}
 */
  const states = [initial];

/**
 * @type {Array<Notify>}
 */
  let notifiers = [];

  export const update = (action) => {
    if (typeof action !== "function") {
      throw new Error("action is required to be function")
    }
    
    const prev = objects.freeze({  ...states[0] });
    const next = objects.freeze({ ...action(prev) });

    states.unshift(next);
  };

  /**
   * @param {Notify} notify
   * @returns
   */

  export const subscribe = (notify) => {
    notifiers.push(notify);

    const unsubscribe = () => {
      const result = notifiers.filter(
        
      )
    }

    return unsubscribe;
  };

  