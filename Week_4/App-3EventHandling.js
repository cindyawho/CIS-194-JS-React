import './App.css';
import data from "./data"
import Card from "./Card"

class Sentence {
    constructor(word1, word2){
        this.word1 = word1;
        this.word2 = word2;
    }

    getSentence(){
        return this.word1 + " " + this.word2;
    }
}

const App = () => 
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {/* creating/instantiating an instance of List component */}
                <List />
                {/* creating/instantiating ANOTHER instance of List component */}
                <List />
            </p>
        </header>
    </div>

const List = () => {
    const helloWorld = new Sentence("Hello", "World!");
    const reactRocks = new Sentence("React", "rocks!");
    
    return (
        <div>
            {helloWorld.getSentence()}
            <hr/>
            {reactRocks.getSentence()}
        </div>
    );
}

//original function declaration:
// function name() {...}

//arrow function:
// const name() => {...}

export default App;