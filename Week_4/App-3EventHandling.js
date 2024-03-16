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

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {/* creating/instantiating an instance of List component */}
                    <List />
                    {/* creating/instantiating ANOTHER instance of List component */}
                    <List />
                </p>
                <div>
                    <label htmlFor='Check'>Check: </label>
                    <input id="check" type="text" onChange={handleEvent}/>
                </div>
            </header>
        </div>
    );
};

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

export default App;