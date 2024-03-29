import React from 'react';

const App = () => {

  // ------------------   DO NOT MODIFY!!! ------------------------
  // This is your array/list of table of content
  // ---------------------------------------------------------
  const toc = [
    {
      title: 'React Homepage',
      url: 'https://reactjs.org/',
    },
    {
      title: 'Getting Started',
      url: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      title: 'Hello World',
      url: 'https://reactjs.org/docs/hello-world.html',
    },
    {
      title: 'Introducing JSX',
      url: 'https://reactjs.org/docs/introducing-jsx.html',
    },
    {
      title: 'Rendering Elements',
      url: 'https://reactjs.org/docs/rendering-elements.html',
    }
  ];

  // ------------------   DO NOT MODIFY!!! ------------------------
  // React's useState hook containing the user's current input state
  // and a state setter when the user's input changes. This assignment
  // makes use of the classic destructuring mechanism in JavaScript
  // ---------------------------------------------------------
  const [searchToC, setToC] = React.useState('');

  // ---------------------------------------------------------
  // TODO (A)
  // Your ToC is being filtered here based on the user input. 
  // React's asynchronous event callback that copies the user's input 
  // into the aforementioned state variable in the app.
  // ---------------------------------------------------------
  const handleSearch = (event) => {
    // console.log(event.target.value);
    setToC(event.target.value);
  }
  
  // ---------------------------------------------------------
  // TODO (B)
  // Your ToC is being filtered based on the user input. HINT: 
  // You may use the JavaScript's filter() method on array.
  // ---------------------------------------------------------
  const searchResults = toc.filter(item => 
    item.title.includes(searchToC)
  )

  return (
    <div>
      <h1>React: A JavaScript library</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List results={searchResults} />
    </div>
  );
};

// ------------------   DO NOT MODIFY!!! ------------------------
// COMPONENT: SEARCH
// This component detects the user input and forwards the event 
// back to the App component to handle.
// ---------------------------------------------------------
const Search = props => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
  </div>
);

// ---------------------------------------------------------
// TODO (C)
// COMPONENT: LIST
// This component renders the filtered search results based 
// on the user input.
// ---------------------------------------------------------
const List = ({ results }) => {
    console.log("List component called and complete");
    const items = results.map((item, index) => (
        <div key={index}>
            <p><a href={item.url}>{item.title}</a></p>
        </div>
    ));
    return (
        <div>
            {/* <h1>List</h1> */}
            {items} 
        </div>
    );
}

export default App;