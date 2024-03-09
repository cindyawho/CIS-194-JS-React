import logo from './logo.svg';
import './App.css';

function App() {
  const react = ['NPM', 'Node.js', 'JXS', 'Babel', 'Transpiler', 'Props', 'Single Page Application'];

  // function renderList(react) {
    
  //   let map1 = react.map((item, index) => (
  //     <li key={index}>{item}</li>
  //   ));

  //   let returnElement = (
  //     <ol>
  //       {map1}
  //     </ol>
  //   )
    
  //   return returnElement;
  // }
  
  
  return (
     // YOUR JAVASCRIPT MAP() AND JSX CODE HERE
    //Note to self: the <> and </> are very important to compiling and rendering the code in react
    <>
    {/*No Function used*/}
      <ol>
        {react.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
{/*     
    {/*Function used}
    {renderList(react)} */}
    </>
    
  );
}
export default App;