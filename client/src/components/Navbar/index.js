import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import store from "store"

function handleLogout() {
    store.remove(`user`)
    window.location.replace("/login")
}

const Navbar = () => {
    
    let user = store.get(`user`)

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
                <div className="collapse navbar-collapse" id="navCollapse">
                    <ul className="navbar-nav ml-auto" id="nav-menu">
                        <li className="hoverable" id="nav-item1">
                            <Link
                                to= {"/profile/" + user.id}
                                className={ "profile"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                <i className="fas fa-user"></i> My Profile
                        </Link>
                        </li>
                        <li className="hoverable" id="nav-item2">
                            <Link
                                to="/library"
                                className={
                                    window.location.pathname === "/library"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                <i className="fas fa-book"></i> Library
                        </Link>
                        </li>
                        <li className="hoverable" id="nav-item2">
                            <Link to = "/"
                                className={ window.location.pathname === "/logout"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick = {handleLogout}
                            >
                                <i className="fas fa-sign-out-alt"></i> Signout
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
