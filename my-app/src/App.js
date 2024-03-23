import React from 'react'
const { useState } = React


const App = () => {
    
  const [input, setValue] = useState("");
  const [name, setName] = useState('Joe');
  
  handleInput = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  }
  
  updateName = (event) => {
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
            <input id="check" type="text" onChange={handleEvent}/>
            <p>Checking for <b>{checkTerm}</b></p>
        </div>
    );
}

const List = props => {
    
    return (
        <div>List</div>
    );
}

ReactDOM.render(<App />,
document.getElementById("root"))