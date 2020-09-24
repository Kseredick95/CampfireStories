import React from "react";
import { Container } from "../components/Grid";
import Navbar from "./../components/NavbarTwo"

function AboutUs () {
    return (
        <div>
        <Navbar/>
    <Container>
        <div className="row justify-content-center">We are a small team that created this website to test our abilities as full stack web-developers. This site was created in just a few weeks using technologies such as: React, Node.js, JavaScript, MongoDB and a few others. We are proud of what we could accomplish within such a small time frame.
        <br></br>
        <br></br>
        Our team consisted of:
        <br></br>
        Andrew - Created the library database, all JavaScript assosicated with stories, JavaScript for story activity on the user profile.
        <br></br>
        Dany - Created logos, most of the CSS files, assisted with troubleshooting.
        <br></br>
        Terry - Profile framework, CSS assosicated with user profiles.
        <br></br>
        Karolyn - User database, login JavaScript, deployment, routing and user profile JavaScript
        <br></br>
        <br></br>
        A special thank you to our amazing teacher Stanley and all the wonderful TAs who helped us along our journey. We could have never gotten as far as we did without your instruction and support. We're cookin' with gas (or is it a campfire?)!</div>
        <br></br>
    </Container>
    </div>
    )
};

export default AboutUs