import './App.css';
import data from "./data"
import Card from "./Card"

// class fileName {
//     constructor(fileStart, fileEnd){
//         this.fileStart = fileStart;
//         this.fileEnd = fileEnd;
//     }

//     getSentence(){
//         return this.fileStart + this.fileEnd;
//     }
// }

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
    //const appleImage = new fileName("./", "1.coverImg");

    return(
        <div>
            <p>
            {
                data.map(item => 
                    <>
                        {console.log(item)};
                        <div><img src={item.coverImg}/></div> {/*?use sentence function to combine "./" with coverImg?*/}
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
// const imageFile = props => {
//     if(props=="1"){
//         return("./item.coverImg");
//     }
//     return ("a");
// }

export default App;