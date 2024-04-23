import './App.css';
import React from 'react';
import axios from 'axios';

// using an API for our bookmarks now
const bookmarksEndpoint = "https://hn.algolia.com/api/v1/search?query=";

const bookmarksReducer = (state, action) => {
    switch(action.type) {
        case "BOOKMARKS_LOADING_INIT":
            return {
                ...state,
                isLoading: true, 
                isError: false
            };
        case "BOOKMARKS_LOADING_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case "BOOKMARKS_LOADING_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            throw new Error();
    }

};

function App() {

    const handleInput = evt => {
        setCheckTerm(evt.target.value);
        console.log(evt.target.value);
    };
    const [checkTerm, setCheckTerm] = React.useState();
    const [url, setUrl] = React.useState(
      `${bookmarksEndpoint}${checkTerm}`
    )
    const [bookmarks, dispatchBookmarks] = React.useReducer(
        bookmarksReducer,
        {
            data: [], 
            isLoading: false, 
            isError: false 
        }
    );

    React.useEffect(() => {

        if(!checkTerm) return; //no refetching if there is no checkTerm

        dispatchBookmarks(
            {type: "BOOKMARKS_LOADING_INIT"}
        )
        //concatenating url with react for the query
        axios.get(url)
            .then(result => {
                dispatchBookmarks( {
                    type: "BOOKMARKS_LOADING_SUCCESS", 
                    payload: result.data.hits
                })
            }).catch(
                () => dispatchBookmarks(
                    {
                        type: "BOOKMARKS_LOADING_FAILURE"
                    })
            )
    }, [url]);

    const handleInputSubmit = () => {
        setUrl(`${bookmarksEndpoint}${checkTerm}`);
    }

    return(
        <div>
            <h1>Input search query</h1>
            <p>
                <Input
                    id="check"
                    value="Checking for "
                    onInput={handleInput}
                    userInput={checkTerm}
                >
                    <b>Check: </b>
                </Input>
            </p>
            <p>
                <button
                type = "button"
                disabled = {!checkTerm}
                onClick = {handleInputSubmit}
                >
                    Submit
                </button>
            </p>
            <h1>Links fetched from API</h1>
            <p>
                {bookmarks.isError && <p>Error just happened ... </p>}
                {/* (condition) ? exe1 : exe2 */}
                {
                    bookmarks.isLoading ? (<p>Loading...</p>) : <List links = {bookmarks.data}/>
                }
            </p>
        </div>
    );
}

const Input = ({ id, value, type = 'text', onInput, userInput, children }) => (
    <>
      <label htmlFor={id}>{children} </label>
      <input id={id} type={type} value={userInput} onChange={onInput} />
      <p>{value} <b>{userInput}</b></p>
    </>
  );

function List({links}) {
    return links.map(item => 
        <div><a href={item.url}>{item.title}</a></div>)
}

export default App;