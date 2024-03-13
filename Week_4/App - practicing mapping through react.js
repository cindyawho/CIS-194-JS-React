import './App.css';
import data from "./data"
import Card from "./Card"

function App() {
 
    // YOUR CODE HERE
    //Ex. 1: Practice Mapping Function
    const list = [1, 2, 3, 4];
    const newList = list.map(item => item*2);
    console.log(newList);

    //Ex. 2: Practice Mapping with Object
    const objList = [
        {
            title: "React home",
            url: "https://reactjs.org",
        },
        {
            title: "Google Link",
            url: "https://google.com",
        },
    ];

    return(
        <div>
            <p>
            {
                objList.map(item => <div><a href={item.url}>{item.title}</a></div>)
            }
            </p>
        </div>
    );
}

export default App;