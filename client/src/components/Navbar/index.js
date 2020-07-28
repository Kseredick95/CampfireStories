import React from "react";
import { Link } from "react-router-dom";
import "./style.less";

function Navbar() {
    return (
        <nav class="navbar navbar-inverse navbar-expand-lg navbar-toggleable-sm">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navCollapse"><span class="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">
                <img src="../../../public/images/CampfireLogo.png" width="120" height="120" alt="" loading="lazy" />
            </Link>
            <div class="collapse navbar-collapse" id="navCollapse">
                <ul class="navbar-nav ml-auto" id="nav-menu">
                    <li className="hoverable" id="nav-item1">
                        <Link
                            to="/profile"
                            className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
                        >
                            <i className="fas fa-user"></i> My Profile
                        </Link>
                    </li>
                    <li className="hoverable" id="nav-item2">
                        <Link
                            to="/storypage"
                            className={window.location.pathname === "/storypage" ? "nav-link active" : "nav-link"}
                        >
                            <i className="fas fa-book"></i> Stories
                        </Link>
                    </li>
                    <li className="hoverable" id="nav-item2">
                        <Link
                            to="/signout"
                            className={window.location.pathname === "/signout" ? "nav-link active" : "nav-link"}
                        >
                            <i className="fas fa-sign-out-alt"></i> Signout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
