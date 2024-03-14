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

function App() {

    return(
        <div>
            <p>
                {/* Creating/instantiating an instance of List component */}
                <List />
            </p>
        </div>
    );
}

function List() {
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

export default App;