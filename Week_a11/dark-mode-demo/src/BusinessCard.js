function Name(props) {
    return <h1>{props.name}</h1>
}

function Title(props) {
    return <p>{props.title}</p>
}

function Email(props) {
    return <p>{props.email}</p>
}

function Phone(props) {
    return <p>{props.phone}</p>
}

export default function BusinessCard() {
    return(
        <div>
            <Name name = "Cindy"/>
            <Title title = "Educator"/>
            <Email email = "cindyandcode@gmail.com"/>
            <Phone phone = "123-456-7890"/>
        </div>  
    )
}