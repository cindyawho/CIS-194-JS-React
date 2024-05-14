import React from "react";
import { Link } from "react-router-dom";

function NavigationPage() {
    return(
        <>
            <ul>
                <li>
                    <Link to="/">App</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/home">Landing Page</Link>
                </li>
            </ul>
        </>
    )
}
export default NavigationPage;