import './App.css';
import React from 'react';

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

    const handleEvent = evt => {
        setCheckTerm(evt.target.value);
    };

    const[checkTerm, setCheckTerm] = React.useState("nothing");

    const helloWorld = new Sentence("Hello", "World!");
    const reactRocks = new Sentence("React", "rocks!");

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <List first={helloWorld} second={reactRocks} />
                </p>
                <div>
                    <label htmlFor='Check'>Check: </label>
                    <input id="check" type="text" onChange={handleEvent}/>
                    <p>Checking for <b>{checkTerm}</b></p>
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