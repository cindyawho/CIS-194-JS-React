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
        case "SET_BOOKMARKS":
            return action.payload;
        default:
            throw new Error();
    }

};

function App() {

    // const [bookmarks, setBookmarks] = React.useState([""]); //replacing with useReducer
    //const[state, dispatch] where state is the new state, dispatch is the updater that takes in type and action/payload
    const [bookmarks, dispatchBookmarks] = React.useReducer(
        bookmarksReducer,
        []
    )

    const[isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        getAsynchBookmarks().then( result => {
            // setBookmarks(result.data.x); //replaced by dispatch and payload line below
            dispatchBookmarks( {
                type: "SET_BOOKMARKS", 
                payload: result.data.x,
            });

            setIsLoading(false);
        }).catch(() => setIsError(true));
    }, []);

    return(
        <div>
            <h1>Please wait 3 seconds</h1>
            <p>
                {isError && <p>Error just happened ... </p>}
                {/* (condition) ? exe1 : exe2 */}
                {
                    isLoading ? (<p>Loading...</p>) : <List links = {bookmarks}/>
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