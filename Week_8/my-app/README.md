# Homework Assignment #6: Build a Shopping Cart Using the useReducer Hook

## PROBLEM STATEMENT
You are building a rudimentary shopping cart online. You have THREE (3) items in your initial state. You will use the useReducer React hook for this problem.

<ul>
    <li>Build a reducer with two types (states): add, remove.</li>
    <li>There are two buttons, one called Add, another called Remove.</li>
    <li>Clicking on any one of the buttons triggers your dispatch function with the action object, product. The dispatch is a special function that dispatches an action object.</li>
    <li>Your dispatch redirects the action object and the current state to the reducer function.</li>
    <li>The reducer function uses the action object and performs a state update, returning the new state.</li>
    <li>React then checks whether the new state differs from the previous one. If the state has been updated, React re-renders the component and useReducer() returns the new state value: [newState, ...] = useReducer(...).</li>
    <li>Remember, the useReducer(reducer, initialState) hook accept TWO (2) arguments: the reducer function and the initial state. The hook then returns an array of TWO (2) items: the current state and the dispatch function.</li>
</ul>

## STEPS
Create a Hello World app from scratch.
Open src/index.css and add the following styling to it [see index.css]
Open src/App.js and copy and paste the STARTER CODE to begin your work.