// @flow strict

import * as React from 'react';
import { Container,Col,Row } from "react-bootstrap";



function Footer() {
    return (
        <div>
            <Container>
                
                <Row>
                <appBar/>
                <Col className="text-center py-3">Copyright &copy; PRIMODIAL ESCROW SERVICES</Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Footer;