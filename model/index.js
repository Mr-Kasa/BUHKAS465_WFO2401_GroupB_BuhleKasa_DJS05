// Importing required functions from other modules.
import { createStore } from './store.js';
import { tallyReducer } from './reducers.js';
import { addAction, subtractAction, resetAction } from './actions.js';

/**
 * Initializes and configures the store using a specific reducer.
 * The tallyReducer is used to manage the state changes based on dispatched actions.
 */
const store = createStore(tallyReducer);

/**
 * Subscribes to state changes to log the updated state to the console.
 * This function serves as a listener that triggers every time the state changes.
 */
store.subscribe(() => {
    console.log('State updated:', store.getState());
});

// Logging the initial state to the console to verify that the store starts with the correct state.
console.log('Initial state:', store.getState()); // Should log { count: 0 }

//Incrementing the Counter
store.dispatch(addAction()); 
store.dispatch(addAction()); 
store.dispatch(addAction()); 
store.dispatch(addAction()); 
store.dispatch(addAction()); 
store.dispatch(addAction()); 

// Decrementing the Counter
store.dispatch(subtractAction()); 
store.dispatch(subtractAction())
store.dispatch(subtractAction())
store.dispatch(subtractAction())

// Resetting the Counter
store.dispatch(resetAction()); 
