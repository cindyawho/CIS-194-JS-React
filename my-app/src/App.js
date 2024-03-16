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

    const items = data.map((item, index) => (
        <Card key={index} item={item} />
    ));

    return(
        <>
            <p>Hello</p>
            {items}
        </>
    );
}
// const imageFile = props => {
//     if(props=="1"){
//         return("./item.coverImg");
//     }
//     return ("a");
// }

export default App;