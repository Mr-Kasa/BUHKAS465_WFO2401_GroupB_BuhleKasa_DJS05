/**
 * Creates a Redux-like store with state management capabilities.
 * @param {Function} reducer - A reducer function that determines how the state is updated with actions.
 * @returns {Object} An object containing methods to interact with the store.
 */
export function createStore(reducer) {
    // Holds the current state of the store
    let state;

    // An array of listener functions that are called when the state changes
    let listeners = [];

    /**
     * Returns the current state of the store.
     * @returns {Object} The current state.
     */
    const getState = () => state;

    /**
     * Dispatches an action to the reducer to update the state,
     * and notifies all listeners about the state change.
     * @param {Object} action - An action object that describes what changes should be made to the state.
     */
    const dispatch = (action) => {
        // Update the state by calling the reducer with the current state and the given action
        state = reducer(state, action);
        // Notify all listeners by calling them
        listeners.forEach(listener => listener());
    };

    /**
     * Adds a listener function that will be called every time the state changes.
     * @param {Function} listener - A function to be called when the state changes.
     * @returns {Function} A function that can be called to unsubscribe the listener.
     */
    const subscribe = (listener) => {
        // Add the listener to the list of listeners
        listeners.push(listener);
        // Provide a way to unsubscribe
        return () => {
            // Remove the listener from the list
            listeners = listeners.filter(l => l !== listener);
        };
    };

    // Initialize the state by dispatching an empty action
    dispatch({}); 

    // Return the store object with methods to interact with the state
    return { getState, dispatch, subscribe };
}
