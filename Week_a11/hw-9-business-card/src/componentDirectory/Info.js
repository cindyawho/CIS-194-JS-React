function Image(props) {
    return <img src={props.image} alt={props.alt} style={props.style} />
}

function Name(props) {
    return <h1>{props.name}</h1>
}

function Title(props) {
    return <p>{props.title}</p>
}

const imageClass = {
    width:'150px', 
    height:'auto'
}

export default function Info() {
    return(
        <div>
            <Image image = "https://i.ibb.co/J7wYDHL/Screenshot-2024-03-06-181138.png" alt="profile picture in art form" style={imageClass}/>
            <Name name = "Cindy Andrade"/>
            <Title title = "Educator and Web Developer"/>
        </div>  
    )
}