import React, {useState} from 'react';
import LoginPage from '../Login';
import LandingPage from '../Landing';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavigationPage from "../Navigation";
import * as ROUTES from "../../constants/paths";

function setToken(userToken) {
    //sessionStorage
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    //from sessionStorage
    const tokenItem = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenItem);
    return userToken?.token;
}

function App() {
    
    const token = getToken();

    if(!token) {
        return <LoginPage setToken = {setToken} />
    }

    return(
        <>
            <h1>App</h1>
            <BrowserRouter>
                <NavigationPage />
                <Routes>
                    <Route path={ROUTES.LOGIN} element ={<LoginPage />} />
                    <Route path={ROUTES.HOME} element ={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;