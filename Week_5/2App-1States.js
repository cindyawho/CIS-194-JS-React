/***********************NOTES*******************************
States are used to make sites interactive
States are used as a property to describe where properties are at at a certain time
Use state function as a hook

Destructuring: remembering we can unpack them using destructuring
//Example:
const list = [1, 2];
const [one, two] = list;
console.log(one);
console.log(two);

//Example 2 also works:
function getNums(){
    return [1,2];
}
const[one, two] = getNums();
*/
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
//~~~~~~~~~~~~~~~~~~~~~~~~~~STATE Stuff~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//States constantly capture the before and after states
//States are not props
//checkTerm is before, setCheckTerm is after
    const[checkTerm, setCheckTerm] = React.useState("nothing");

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