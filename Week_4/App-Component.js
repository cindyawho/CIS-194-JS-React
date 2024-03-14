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
    <div>
        <p>
            {/* Creating/instantiating an instance of List component */}
            <List />
        </p>
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