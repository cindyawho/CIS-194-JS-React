import './App.css';
import Info from './componentDirectory/Info';
import About from './componentDirectory/About';
import Funfacts from './componentDirectory/Funfacts';
import Buttons from './componentDirectory/Buttons';
import ToggleSelector from './componentDirectory/ToggleSelector';
import React, {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(mode => !mode);
    // console.log("Hello");
    // console.log(darkMode);
  }

  return (
    <div className="Card">
      <ToggleSelector
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Info />
      <About />
      <Funfacts />
      <Buttons />
    </div>
  );
}

export default App;
