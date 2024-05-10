import './App.css';
import BusinessCard from './BusinessCard';
import ToggleSelector from './ToggleSelector';
import React, {useState} from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(mode => !mode)
  }

  return (
    <>
      <ToggleSelector 
        darkMode={darkMode}
        toggleDarkMode = {toggleDarkMode}
      />
      <BusinessCard />
    </>
  );
}

export default App;
