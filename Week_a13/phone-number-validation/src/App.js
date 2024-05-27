import React, {useState} from 'react'

function App() {
  const [number, setNumber] = React.useState("");
  const[message, setMessage] = React.useState("Test");

  const update = evt => {
    setNumber(evt.target.value);
    return number
  }

  const validate = (event) => {
    event.preventDefault();
    if(number.match(/^\(?([0-9]{3})\)?([ -]?)([0-9]{3})([ -]?)([0-9]{4})$/)){
      setMessage("Valid Phone Number");
    } else {
      setMessage("Invalid Phone Number");
    }
    // console.log(props)
    return;
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
          <p>{message}</p>
          <button onClick={validate}>Validate</button>
        </form>
    </div>
  );
}

export default App;
