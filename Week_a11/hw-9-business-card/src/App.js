import './App.css';
import Info from './componentDirectory/Info';
import About from './componentDirectory/About';
import Funfacts from './componentDirectory/Funfacts';
import Buttons from './componentDirectory/Buttons'

function App() {
  return (
    <div className="Card">
      <Info />
      <About />
      <Funfacts />
      <Buttons />
    </div>
  );
}

export default App;
