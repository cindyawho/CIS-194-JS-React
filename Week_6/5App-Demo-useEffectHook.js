//The only line needed in HTML is
//<div id="root"></div>

const { useState, useEffect } = React;

const App = () => {
  
  console.log("Rendering App")
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect takes 2 arguments
  // first parameter: function, containing the effect that changes upon every completed render. 
  // second parameter: dependency array, or array of values that the effect depends on. This array can be empty also.
  useEffect(() => {
    // side effect function
    console.log("Running effect")
  }, [count]);
  
  // Question: what happens if the 2nd paramter in useEffect() is empty? 
  
  return (
    <div>
      <p>Clicks: {count} Times</p>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count + 1</button>
    </div>
  );
};

ReactDOM.render(<App />,
document.getElementById("root"))