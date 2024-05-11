function Title(props) {
    return <h2 class={props.className}>{props.text}</h2>
}

function Description(props) {
    return <p class={props.className}>{props.text} </p>
}

export default function Funfacts() {
    return(
        <div className="funfacts">
            <Title text = "Fun Facts" className="funfacts--title"/>
            <Description 
                text = "I love to read, listen to musical soundtracks, and code. I've read the Percy Jackson series 7 times! My latest musical obsession is Epic: The Musical." 
                className="funfacts--description"
            />
        </div>  
    )
}