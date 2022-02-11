import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import AdvantageItem from "components/AdvantageItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Advantages = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader, advantages } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row className="text-center">
                {advantages.map((advantage) => (
                    <Col md={6} lg={3} key={advantage.header}>
                        <AdvantageItem {...advantage} />
                    </Col>
                ))}
            </Row>
        </PageSection>
    );
};

Advantages.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Advantages.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Advantages;
