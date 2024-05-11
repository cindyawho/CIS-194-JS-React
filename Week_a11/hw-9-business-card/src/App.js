import './App.css';
import Info from './componentDirectory/Info';
import About from './componentDirectory/About';
import Funfacts from './componentDirectory/Funfacts';

function App() {
  return (
    <div className="Card">
      <Info />
      <About />
      <Funfacts />
    </div>
  );
}

export default App;
