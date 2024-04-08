import './App.css';

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

function App() {

    return(
        <div>
            <p>
            {listComponent()}
            </p>
        </div>
    );
}

function listComponent() {
    return initialBookmarks.map(item => 
        <div><a href={item.url}>{item.title}</a></div>)
}

export default App;