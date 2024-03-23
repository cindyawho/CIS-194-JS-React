import React from 'react'
import ReactDOM from 'react-dom';
const { useState } = React

const toc = [
    {
      title: "React Homepage",
      url: "https://reactjs.org/",
    },
    {
      title: "Getting Started",
      url: "https://reactjs.org/docs/getting-started.html",
    },
    {
      title: "Hello World",
      url: "https://reactjs.org/docs/hello-world.html",
    },
    {
      title: "Introducing JSX",
      url: "https://reactjs.org/docs/introducing-jsx.html",
    },
    {
      title: "Rendering Elements",
      url: "https://reactjs.org/docs/rendering-elements.html",
    }
  ];  

const App = () => {
  
  const [input, setValue] = useState("");
  const [name, setName] = useState('Joe');
  
  const handleInput = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  }
  
  const updateName = (event) => {
    event.preventDefault();
    setName(input);
    setValue("");
  }
  
  return (
    <div className="box">
      <h1>
        Hello, <span>{name}!</span>   
      </h1>
      
      <form className="form">
        
        <div class="field">
          <label for="name-1">Update Name</label>
          <div class="control">
            <input type="text" value={input} name="name-1" onChange={handleInput} class="input"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button onClick={updateName} class="button is-dark">Save</button>
          </div>
        </div>
      </form>
      <div>
        <Search />
      </div>
      <div>
        <List />
      </div>
    </div>
  )
}

const Search = () => {

    return (
        <div>
            <h1>Search  
            <input id="check" type="text" />
            </h1>
        </div>
    );
}

const List = () => {
    const items = toc.map((item, index) => (
        <div>
            <p><a href={item.url}>{item.title}</a></p>
        </div>
    ));
    return (
        <div>
            <h1>List</h1>
            {items} 
        </div>
    );
}

ReactDOM.render(<App />,
document.getElementById("root"))
export default App;