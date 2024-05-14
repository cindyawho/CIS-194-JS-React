import React, {useState} from 'react';

function fetchToken(creds) {

}

function Login( {setToken} ) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (evt) => {
        const token = fetchToken({
            username, 
            password,
        });
        setToken(token);
    }

    return(
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <form onSubmit = {{handleSubmit}}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={evt => setUserName(evt.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={evt => setPassword(evt.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;