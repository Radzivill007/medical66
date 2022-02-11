import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contact = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header, subheader, telephone, email, address } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                    <h2 className="mt-0">{header}</h2>
                    <hr className="divider my-4" />
                    <p className="text-muted mb-5">{subheader}</p>
                </Col>
            </Row>
            <Row>
                <Col lg={8} className="order-2 order-lg-1">
                    <YMaps>
                        <Map width="auto" height={400} defaultState={{ center: [56.795540, 60.615019], zoom: 16 }}>
                            <Placemark geometry={[56.795540, 60.615019]} />
                        </Map>
                    </YMaps>
                </Col>
                <Col lg={4} className="order-1 order-lg-2 d-flex flex-column flex-md-row flex-lg-column justify-content-between">
                    <div className="mx-auto text-center mb-4 mb-lg-0">
                        <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
                        <a className="d-block" href={`tel:${telephone}`}>
                            {telephone}
                        </a>
                    </div>
                    <div className="mx-auto text-center mb-4 mb-lg-0">
                        <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
                        <a className="d-block" href={`mailto:${email}`}>
                            {email}
                        </a>
                    </div>
                    <div className="mx-auto text-center mb-4 mb-lg-0">
                        <Icon iconName="MapIcon" size="3x" className="text-muted mb-3" />
                        <a className="d-block">
                            {address}
                        </a>
                    </div>
                </Col>
            </Row>
        </PageSection>
    );
};

Contact.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Contact.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Contact;
