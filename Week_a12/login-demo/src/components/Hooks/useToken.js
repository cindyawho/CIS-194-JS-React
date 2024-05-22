import React, {useState} from 'react'

const useToken = () => {
    const getToken = () => {
        //from sessionStorage
        const tokenItem = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenItem);
        return userToken?.token;
    }

    const [token, setToken] = useState(getToken()); //react native hook

    const saveToken = userToken => {
        sessionStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken.token);
    };
    return {
        token, 
        setToken: saveToken
    }
}

export default useToken;