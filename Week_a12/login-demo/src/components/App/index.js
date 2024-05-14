import React from 'react';
import LoginPage from '../Login';
import LandingPage from '../Landing';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return(
        <>
            <h1>App</h1>
            <BrowserRouter>
            <Routes>
                <Route path="/login" element ={<LoginPage />} />
                <Route path="/home" element ={<LandingPage />} />
            </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;