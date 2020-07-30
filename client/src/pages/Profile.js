import React from "react";
import { Banner, CTA } from "../components/Banner";
import { Container, Col, RowMt, Row, Column } from "../components/Grid";
import { UserCard, ConnectCard, HistoryCard } from '../components/Card'

const Profile = () => {
    return (
        <div>
            <Banner />
            <Container>
                <div class="row justify-content-center">
                    <div class="col-md" id="left">
                        <UserCard />
                        <ConnectCard />
                    </div>
                    <Col size="md">
                        <RowMt size="4">
                            <div class="col font-weight-bold">MY DASHBOARD</div>
                        </RowMt>
                        <CTA />
                        <Row>
                            <Column>
                                <HistoryCard />
                            </Column>
                        </Row>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Profile;