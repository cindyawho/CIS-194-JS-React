import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const react = ['NPM', 'Node.js', 'JXS', 'Babel', 'Transpiler', 'Props', 'Single Page Application'];

  // Create a React element using React.createElement()
  const element = React.createElement('ol', null, react.map((item, index) => (
    <li key={index}>{item}</li>
  )));
  
  //This line below is Not needed bc the return should return JSX or tract element and not do actions like rendering
  //ReactDOM.render(element, document.getElementById('root'))
  
  return (
    // YOUR JAVASCRIPT MAP() AND JSX CODE HERE
    element
  );
}
export default App;