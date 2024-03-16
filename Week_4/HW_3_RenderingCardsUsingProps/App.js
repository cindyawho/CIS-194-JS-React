import './App.css';
import data from "./data"
import Card from "./Card"

function App() {
    //Mapping items from data, sending it to Card, and receiving the rendered version
    const items = data.map((item, index) => (
        //similar to <List /> from video
        <Card key={index} item={item} />
    ));

    return(
        <>
            {items}
        </>
    );
}

export default App;