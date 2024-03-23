import './App.css';

class Sentence {
    constructor(word1, word2){
        this.word1 = word1;
        this.word2 = word2;
    }

    getSentence(){
        return this.word1 + " " + this.word2;
    }
}

const App = () => {

    const handleEvent = event => {
        console.log(event);
    };

    const helloWorld = new Sentence("Hello", "World!");
    const reactRocks = new Sentence("React", "rocks!");

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {/* creating/instantiating an instance of List component */}
                    <List first={helloWorld} second={reactRocks} />
                </p>
                <div>
                    <label htmlFor='Check'>Check: </label>
                    <input id="check" type="text" onChange={handleEvent}/>
                </div>
            </header>
        </div>
    );
};

const List = props => {
    
    return (
        <div>
            {props.first.getSentence()}
            <hr/>
            {props.second.getSentence()}
        </div>
    );
}

export default App;