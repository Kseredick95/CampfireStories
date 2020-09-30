import React from "react";
import { Banner, CTA, Header } from "../components/Toolkit/Banner";
import { Container, Col, RowMt, Row, Column } from "../components/Toolkit/Grid";
import { UserCard, ConnectCard, HistoryCard } from '../components/Toolkit/Card';
import Navbar from "../components/Toolkit/Navbar";
import store from "store";
import ProfileCard  from "../components/ProfileEdit";
// import Timer from "../helpers/AutoLogout"


function Profile() {

    let user = store.get(`user`);

    let myProfile = "/profile/" + user._id;
    let editProfile = myProfile + "/edit-profile";

    let renderPage = () => {
        if (window.location.pathname === editProfile) {
            return <ProfileCard value={user} />;
        } else {
            return <HistoryCard value={user} />;
        }
    };

    return (
        <div id="main">
            {/* <Timer/> */}
            <Navbar />
            <Banner />
            <Container>
                <div className="row justify-content-center">
                    <div className="col-md" id="left">
                        <UserCard value={user} />
                        <ConnectCard value={user} />
                    </div>
                    <Col size="md">
                        <RowMt size="4">
                            <Header>
                                <Column>
                                    MY DASHBOARD
                                </Column>
                            </Header>
                        </RowMt>
                        <CTA />
                        <Row>
                            <Column>
                                {renderPage()}
                            </Column>
                        </Row>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Profile;