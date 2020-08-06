import React from 'react';
import { Link } from "react-router-dom";

const NavbarTwo = () => {
    return (
        <div id="nav-body">
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-toggleable-sm">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navCollapse"><span className="navbar-toggler-icon"></span>
                </button>
                <div id="logo">
                    <Link className="navbar-brand" to="/">
                        <img src={process.env.PUBLIC_URL + '/images/CampfireLogo.png'} alt="Campfire Stories Logo" loading="lazy" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavbarTwo;