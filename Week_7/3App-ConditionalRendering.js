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
    new Promise(resolve =>
        setTimeout(
            () => resolve({data: {x: initialBookmarks}}),
            3000
        )
);

function App() {

    const [bookmarks, setBookmarks] = React.useState([""]);
    const[isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        getAsynchBookmarks().then( result => {
            setBookmarks(result.data.x);
            setIsLoading(false);
        });
    }, []);

    return(
        <div>
            <h1>Please wait 3 seconds</h1>
            <p>
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