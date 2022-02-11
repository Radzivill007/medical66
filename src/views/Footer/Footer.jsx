import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {

    return (
        <footer className="footer py-3">
            <Container>
                <Row className="align-items-center text-center justify-content-between">
                    <Col lg={5} className="text-lg-left">
                        Разработано в <a target="_blank" rel="noreferrer" href="https://leadboat.ru">Leadboat.ru</a>
                    </Col>
                    <Col lg={4} className="text-lg-right">

                        {/* <a className="mr-3" href={privacyHref}>
                            {privacyText}
                        </a>
                        <a href={termsHref}>{termsText}</a> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
