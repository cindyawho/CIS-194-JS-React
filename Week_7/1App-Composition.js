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
                    <Input 
                        id = "check"
                        value = "Checking for "
                        onInput = {handleInput} 
                        userInput = {checkTerm} 
                    >
                        <b>Check: </b>
                    </Input>
                </p>
            </header>
        </div>
    );
};

const Input = ({id, value, type='text', onInput, userInput, children}) => (
    <> 
        <label htmlFor={id}>{children}</label>
        <input id={id} type={type} value={userInput} onChange={onInput}/>
        <p>{value} <b>{userInput}</b></p>
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