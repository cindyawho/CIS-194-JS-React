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
        // localStorage.setItem('input', evt.target.value); //don't need this because of useEffect below
    };

    const helloWorld = new Sentence("Hello", "World!");
    const reactRocks = new Sentence("React", "rocks!");

    const[checkTerm, setCheckTerm] = React.useState( // State gets initialized || default value
        localStorage.getItem('input') || 'nothing'
    );

    React.useEffect(
        // callback function (aka side effect function)
        () => {
            localStorage.setItem('input', checkTerm);
        },
        // dependency array
        [checkTerm],
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

const Input = ({onInput, userInput}) => {
    // destructuring props in the above line makes it even simpler

    return(
        <div>
            <label htmlFor='Check'>Check: </label>
            <input id="check" type="text" value={userInput} onChange={onInput}/>
            <p>Checking for <b>{userInput}</b></p>
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