import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import Slider from '../pages/Shared/Slider/Slider';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Slider></Slider>
            <Container>
                <Row>
                    <Col lg={12}>
                        <LeftNav></LeftNav>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default Main;