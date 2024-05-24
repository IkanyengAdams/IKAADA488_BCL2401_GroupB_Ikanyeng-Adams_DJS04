import { store } from './store.js';
import { add, subtract, reset } from './actions.js';

// Scenario 1: Initial State Verification
console.log('Initial state:', store.getState()); // Should log { count: 0 }

// Subscribe to state changes
store.subscribe((next, prev) => {
  console.log('State updated:', next);
});

// Scenario 2: Incrementing the Counter
store.update(add);
store.update(add); // Should log { count: 2 }

// Scenario 3: Decrementing the Counter
store.update(subtract); // Should log { count: 1 }

// Scenario 4: Resetting the Counter
store.update(reset); // Should log { count: 0 }
