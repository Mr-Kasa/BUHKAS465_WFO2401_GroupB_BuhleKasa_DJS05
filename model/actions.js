/**
 * Creates an action object for incrementing the tally count.
 * This function does not take parameters and always returns the same action object.
 * @returns {{type: string}} An action object with the type 'ADD'.
 */
export const addAction = () => ({ type: 'ADD' });

/**
 * Creates an action object for decrementing the tally count.
 * This function does not take parameters and always returns the same action object.
 * @returns {{type: string}} An action object with the type 'SUBTRACT'.
 */
export const subtractAction = () => ({ type: 'SUBTRACT' });

/**
 * Creates an action object for resetting the tally count to zero.
 * This function does not take parameters and always returns the same action object.
 * @returns {{type: string}} An action object with the type 'RESET'.
 */
export const resetAction = () => ({ type: 'RESET' });
