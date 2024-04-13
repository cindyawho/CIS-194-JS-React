import './App.css';
import React from 'react'

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

    const [bookmarks, dispatchBookmarks] = React.useReducer(
        bookmarksReducer,
        {
            data: [], 
            isLoading: false, 
            isError: false 
        }
    );

    React.useEffect(() => {
        dispatchBookmarks(
            {type: "BOOKMARKS_LOADING_INIT"}
        )
        //concatenating url with react for the query
        fetch(`${bookmarksEndpoint}react`) 
            .then(response => response.json())
            .then(result => {
                dispatchBookmarks( {
                    type: "BOOKMARKS_LOADING_SUCCESS", 
                    payload: result.hits
                })
            }).catch(
                () => dispatchBookmarks(
                    {
                        type: "BOOKMARKS_LOADING_FAILURE"
                    })
            )
    }, []);

    return(
        <div>
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

function List({links}) {
    return links.map(item => 
        <div><a href={item.url}>{item.title}</a></div>)
}

export default App;