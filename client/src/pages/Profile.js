import React from "react";
import Banner from "../components/Banner";
import { Container, Col } from "../components/Grid";
import { UserCard, ConnectCard } from '../components/Card'

const Profile = () => {
    return (
        <Banner />
        <Container>
            <div class="row justify-content-center">
                <div class="col-md" id="left">
                    <UserCard />
                    <ConnectCard />
                </div>
                <Col size="md">
                    
                </Col>
            </div>
        </Container>
    );
};

export default Profile;