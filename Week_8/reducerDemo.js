// In the example below, we defined a simple counter component that uses useReducer hook to 
// manage the state of the count variable. We defined an initial state value of { count: 0 } 
// and a reducer function that handles two actions: increment and decrement. The dispatch function 
// is used to trigger the action and update the state. When the dispatch function is called with 
// an action, it passes the action object to the reducer function along with the current state, and the
// reducer returns the new state based on the action. Finally, the updated state is displayed in the component.

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}