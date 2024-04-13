import './App.css';
import React from 'react'

const initialBookmarks = [
    {
        title: "React home",
        url: "https://reactjs.org",
    },
    {
        title: "Google Link",
        url: "https://google.com",
    },
];

const getAsynchBookmarks = () =>
//     new Promise(resolve =>
//         setTimeout(
//             () => resolve({data: {x: initialBookmarks}}),
//             3000
//         )
// );
// creating artificial errors, the issue is that we get both an error and loading message at the same time which is a bad user experience
new Promise((resolve, reject) => setTimeout(reject, 3000));

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

    // const [bookmarks, setBookmarks] = React.useState([""]); //replacing with useReducer
    //const[state, dispatch] where state is the new state, dispatch is the updater that takes in type and action/payload
    const [bookmarks, dispatchBookmarks] = React.useReducer(
        bookmarksReducer,
        {
            data: [], 
            isLoading: false, 
            isError: false 
        }
    );
    //Replacing the two lines below with new code in useReducer
    // const[isLoading, setIsLoading] = React.useState(false);
    // const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        // setIsLoading(true);
        dispatchBookmarks(
            {type: "BOOKMARKS_LOADING_INIT"}
        )
        getAsynchBookmarks().then( result => {
            // setBookmarks(result.data.x); //replaced by dispatch and payload line below
            dispatchBookmarks( {
                type: "BOOKMARKS_LOADING_SUCCESS", 
                payload: result.data.x,
            });
            // setIsLoading(false);
        }).catch(
            () => dispatchBookmarks({type: "BOOKMARKS_LOADING_FAILURE"})
        );
    }, []);

    return(
        <div>
            <h1>Please wait 3 seconds</h1>
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