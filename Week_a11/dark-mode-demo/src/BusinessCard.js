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

const dark = {
    height: '200px',
    width: '300px',
    color: 'white',
    backgroundColor: 'black',
    padding: '32px 64px',
    textAlign: 'left',
}

const light = {
    height: '200px',
    width: '300px',
    color: 'black',
    backgroundColor: 'white',
    padding: '32px 64px',
    textAlign: 'left',
}

export default function BusinessCard(props) {
    return(
        <div style={props.darkMode ? dark : light}>
            <Name name = "Cindy"/>
            <Title title = "Educator"/>
            <Email email = "cindyandcode@gmail.com"/>
            <Phone phone = "123-456-7890"/>
        </div>  
    )
}