import './App.css';
import Info from './componentDirectory/Info';
import About from './componentDirectory/About';
import Funfacts from './componentDirectory/Funfacts';
import Buttons from './componentDirectory/Buttons';
import ToggleSelector from './componentDirectory/ToggleSelector';

function App() {
  return (
    <div className="Card">
      <ToggleSelector/>
      <Info />
      <About />
      <Funfacts />
      <Buttons />
    </div>
  );
}

export default App;
