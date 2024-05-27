import React, {useState} from 'react'

function App() {
  const [number, setNumber] = React.useState("");

  const update = evt => {
    setNumber(evt.target.value);
    return number
  }

  return (
    <div>
      <header>
        <h1>Phone Number Validation</h1>
        <h2>Phone Number Entered: {number}</h2>
      </header>
        <p>
          Enter Phone Number Below:
        </p>
        <form>
          <input type="text" onChange={update}></input>
          <button>Validate</button>
        </form>
    </div>
  );
}

export default App;
