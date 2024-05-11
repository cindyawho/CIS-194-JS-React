function Title(props) {
    return <h2 class={props.className}>{props.text}</h2>
}

function Description(props) {
    return <p class={props.className}>{props.text} </p>
}

export default function Info() {
    return(
        <div>
            <Title text = "About" className="aboutClass--title"/>
            <Description text = "Hello! I am Cindy. I have been teaching math for about 4 years now and am excited to continue my coding journey." className="aboutClass--description"/>
        </div>  
    )
}