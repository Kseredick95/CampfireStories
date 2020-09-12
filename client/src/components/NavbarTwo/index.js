import React from 'react';
import { Link } from "react-router-dom";
import store from "store";
import Timer from "../../helpers/AutoLogout"

function NavbarTwo(){
    let user = store.get("user")
    return (
        <div id="nav-body-two">
            <nav className="navbar navbar-inverse navbar-expand-lg">
                <div id="logoNavTwo">
                    <Timer />
                    <Link className="navbar-brand" to={handleRedirect(user)}>
                        <img src={process.env.PUBLIC_URL + '/images/CampfireLogo.png'} alt="Campfire Stories Logo" loading="lazy" />
                    </Link>
                </div>
            </nav>
        </div>
    )
};

function handleRedirect(user) {
    if (user === undefined) {
        return ("/")
    } else {
        return ("/profile/" + user._id)
    }
}
export default NavbarTwo;