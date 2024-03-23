import React from 'react'
import ReactDOM from 'react-dom';
const { useState } = React

const list = [
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
      
    </div>
  )
}

const Search = props => {

    return (
        <div>
            <h1>Search</h1>
            <label htmlFor='Check'>Check: </label>
            {/* <input id="check" type="text" onChange={handleInput}/> */}
        </div>
    );
}

const List = props => {
    const items = list.map((item, index) => (
        //similar to <List /> from video
        {item}
    ));
    return (
        <div>List
           {items} 
        </div>
    );
}

ReactDOM.render(<App />,
document.getElementById("root"))
export default App;