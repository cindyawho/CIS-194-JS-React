import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/paths";

function NavigationPage() {
    return(
        <>
            <ul>
                <li>
                    <Link to={ROUTES.APP}>App</Link>
                </li>
                <li>
                    <Link to={ROUTES.LOGIN}>Login</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Landing Page</Link>
                </li>
            </ul>
        </>
    )
}
export default NavigationPage;