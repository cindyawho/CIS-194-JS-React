import logo from './logo.svg';
import './App.css';

function App() {
  const react = ['NPM', 'Node.js', 'JXS', 'Babel', 'Transpiler', 'Props', 'Single Page Application'];
  
  // function printList(array) {
  //   let string = Array.prototype.map(array);
  //   return string;
  // }

  // const element = (
  //   <ul>
  //     {printList(react)};
  //   </ul>
  // );
  
  return (
     // YOUR JAVASCRIPT MAP() AND JSX CODE HERE
    <ul>
      {react.prototype.map(react => {
        return (
          <li>
            {react}
          </li>
        )
      })}
    </ul>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
