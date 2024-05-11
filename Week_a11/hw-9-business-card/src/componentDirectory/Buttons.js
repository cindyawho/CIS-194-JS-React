function Button(props) {
    return <a href={props.link}><img src={props.image} alt={props.alt} style={props.style} /></a>
}

const buttonClass = {
    width:'auto', 
    height:'50px'
}

export default function Buttons() {
    return(
        <div class="buttons">
            <Button 
                image = "https://i.ibb.co/g6knMdP/email-button.png" 
                alt="email icon" 
                style={buttonClass}
                class="button--icon"
                link="mailto:cindyandcode@gmail.com"
            />
            <Button 
                image = "https://i.ibb.co/Njn4xB9/linkedin-button.png" 
                alt="linkedin icon" 
                style={buttonClass}
                class="button--icon"
                link="https://linkedin.com"
            />
        </div>  
    )
}