const { useReducer } = React;

// The initial state is the value the state is initialized with
const initialState = [
  {
    name: "Joe",
    enrolled: false,
  },
  {
      name: "Annie",
      enrolled: true,
  },
  {
      name: "Andy",
      enrolled: false,
  },
];

// STEP 2: then, React redirects the action object and the current state 
// value to the reducer function. Note the current state object is an
// array of name-enrolled, key-value students (objects).
const reducer = (state, action) => {
  // STEP 3: The reducer function uses the action object and performs 
  // a state update, returning the new state.
  switch (action.type) {
    case 'ENROLLED':
      return state.map(student => {
        if (student.name === action.payload) student.enrolled = true;
        return student;
      });
    case 'WITHDRAWN':
      return state.map(student => {
        if (student.name === action.payload) student.enrolled = false;
        return student;
      });
    default:
      return state;
  }
}

// STEP 4: React then checks whether the new state differs from the previous one. 
// If the state has been updated, React re-renders the component and useReducer() 
// returns the new state value: [newState, ...] = useReducer(...).

const App = () => {
  
  // The useReducer(reducer, initialState) hook accept 2 arguments: the 
  // reducer function and the initial state. The hook then returns an 
  // array of 2 items: the current state and the dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Action object, which describes how to update the state. The dispatch is 
  // a special function that dispatches an action object. The dispatch function 
  // is created for you by the useReducer() hook.
  const enrollStudent = name => dispatch({ type: 'ENROLLED', payload: name });
  
  // Action object, which describes how to update the state
  const withdrawStudent = name => dispatch({ type: 'WITHDRAWN', payload: name });
  
  // STEP 1, the event handler calls the dispatch function with the action object.
  return (
    <>
      <h3>Student Enrollment List</h3>
      {state.map(student => (
        <div className = "box">
          <div>Name: {student.name}</div>
          <div>Status: {student.enrolled ? "Enrolled" : "Withdrawn"}</div>
          {student.enrolled ? (
            <button onClick={() => withdrawStudent(student.name)}>Withdraw</button>
          ) : (
            <button onClick={() => enrollStudent(student.name)}>Enroll</button>
          )}
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))