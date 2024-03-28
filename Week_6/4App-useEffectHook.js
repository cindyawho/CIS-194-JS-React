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
    const handleInput = evt => {
        // Is only triggered when the Input is called
        setCheckTerm(evt.target.value);
        console.log(evt.target.value);
        localStorage.setItem('input', evt.target.value);
    };

    const helloWorld = new Sentence("Hello", "World!");
    const reactRocks = new Sentence("React", "rocks!");

    const[checkTerm, setCheckTerm] = React.useState( // State gets initialized || default value
        localStorage.getItem('input') || 'nothing'
    );

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {/* Child 1: List */}
                    <List first={helloWorld} second={reactRocks} />
                </p>
                <p>
                    {/* Child 2: Input */}
                    <Input onInput = {handleInput} userInput = {checkTerm} />
                </p>
            </header>
        </div>
    );
};

const Input = props => {
    // Cleaner version, will go to onInput
    return(
        <div>
            <label htmlFor='Check'>Check: </label>
            <input id="check" type="text" value={props.userInput} onChange={props.onInput}/>
            <p>Checking for <b>{props.userInput}</b></p>
        </div>
    )
}

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