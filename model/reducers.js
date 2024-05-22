/**
 * The initial state of the tally counter.
 * @type {{count: number}}
 */
export const initialState = { count: 0 };

/**
 * The reducer function for the tally counter application.
 * Manages state transitions based on dispatched actions.
 *
 * @param {Object} state - The current state of the tally counter.
 * @param {Object} action - The action object that may alter the state.
 * @returns {Object} The new state of the tally counter after applying the action.
 */
export function tallyReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            // Case to handle incrementing the count
            return { count: state.count + 1 };
        case 'SUBTRACT':
            // Case to handle decrementing the count
            return { count: state.count - 1 };
        case 'RESET':
            // Case to handle resetting the count to zero
            return { count: 0 };
        default:
            // Default case to handle any unknown actions
            return state;
    }
}
