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
    //const appleImage = new fileName("./", "1.coverImg");

    const[item1, item2, item3] = data;
    console.log("item1 in data: ", item1);
    console.log("item2 in data: ", item2);
    console.log("item3 in data: ", item3);
    console.log("END OF CONSOLE LOG.");

    const items = data.map((item, index) => (
        <Card key={index} item={item} />
    ));

    return(
        // {const{item1, item2, item3} = data;
        // {console.log("This is item1 in data: ", item1);}
        // console.log("END OF CONSOLE LOG.");}
        <>
        <p>Hello</p>
        {items}
        {/* <Card
            //item1 = {item1}
            {data.map(item => 
                item1 = item);}
        /> */}
        </>
        // <div>
        //     <p>
        //     {
        //         data.map(item => 
        //             <>
        //                 {console.log(item)};
        //                 <div><img src={item.coverImg}/></div> {/*?use sentence function to combine "./" with coverImg?*/}
        //                 <div>{item.title}</div>
        //                 <div><b>Average Cost ${item.price}</b> / LB</div>
        //                 <div>Kingdom: {item.stats.kingdom}</div>
        //                 <div>Family: {item.stats.family}</div>
        //                 <div>Genus: {item.stats.genus}</div>
        //                 <div>Origin: {item.location}</div>
        //             </>
        //         )
        //     }
        //     </p>
        // </div>
    );
}
// const imageFile = props => {
//     if(props=="1"){
//         return("./item.coverImg");
//     }
//     return ("a");
// }

export default App;