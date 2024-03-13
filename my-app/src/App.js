import './App.css';
import data from "./data"
import Card from "./Card"

function App() {
 
    // YOUR CODE HERE
    // {
    //     id: 1,
    //     title: "Nutrition info about Apple",
    //     description: "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
    //     price: 1.00,
    //     coverImg: "apple.jpg",
    //     stats: {
    //         kingdom: "Plantae",
    //         family: "Rosaceae",
    //         genus: "Malus"
    //     },
    //     location: "Japan"
    // }
    

        return(
        <div>
            <p>
            {
                data.map(item => 
                    <>
                        <div><img src={item.coverImg}/></div> 
                        <div>{item.title}</div>
                        <div><b>Average Cost ${item.price}</b> / LB</div>
                        <div>Kingdom: {item.stats.kingdom}</div>
                        <div>Family: {item.stats.family}</div>
                        <div>Genus: {item.stats.genus}</div>
                        <div>Origin: {item.location}</div>
                    </>
                )
            }
            </p>
        </div>
    );
}

export default App;