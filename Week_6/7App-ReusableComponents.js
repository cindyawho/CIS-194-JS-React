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
        setCheckTerm(evt.target.value);
        console.log(evt.target.value);
    };

    const helloWorld = new Sentence("Hello", "World!");
    const reactRocks = new Sentence("React", "rocks!");

    const[checkTerm, setCheckTerm] = React.useState( 
        localStorage.getItem('input') || 'nothing'
    );

    React.useEffect(
        () => {
            localStorage.setItem('input', checkTerm);
        },
        [checkTerm],
    );

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <List first={helloWorld} second={reactRocks} />
                </p>
                <p>
                    <Input onInput = {handleInput} userInput = {checkTerm} />
                </p>
            </header>
        </div>
    );
};

const Input = ({onInput, userInput}) => (
    <> 
        <label htmlFor='Check'>Check: </label>
        <input id="check" type="text" value={userInput} onChange={onInput}/>
        <p>Checking for <b>{userInput}</b></p>
    </>
);

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