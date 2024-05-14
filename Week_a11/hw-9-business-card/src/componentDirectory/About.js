function Title(props) {
    return <h2 class={props.className}>{props.text}</h2>
}

function Description(props) {
    return <p class={props.className}>{props.text} </p>
}

export default function About(props) {
    return(
        <div className = {props.darkMode ? "about dark" : "about light"}>
            <Title text = "About" className="about--title"/>
            <Description text = "Hello! I am Cindy. I have been teaching math for about 4 years now and am excited to continue my coding journey." className = {props.darkMode ? "about--description dark" : "about--description light"}/>
        </div>
    )
}