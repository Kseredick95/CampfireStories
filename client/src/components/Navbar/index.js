import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <div id="nav-body">
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-toggleable-sm">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navCollapse"><span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">
                    <img src="../../../public/images/CampfireLogo.png" width="120" height="120" alt="" loading="lazy" />
                </Link>
                <div className="collapse navbar-collapse" id="navCollapse">
                    <ul className="navbar-nav ml-auto" id="nav-menu">
                        <li className="hoverable" id="nav-item1">
                            <Link
                                to="/profile"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/profile"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                <i className="fas fa-user"></i> My Profile
                        </Link>
                        </li>
                        <li className="hoverable" id="nav-item2">
                            <Link
                                to="/storypage"
                                className={
                                    window.location.pathname === "/storypage"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                <i className="fas fa-book"></i> Stories
                        </Link>
                        </li>
                        <li className="hoverable" id="nav-item2">
                            <Link
                                to="/signout"
                                className={
                                    window.location.pathname === "/signout"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
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
