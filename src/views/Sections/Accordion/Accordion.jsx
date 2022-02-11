import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Accordion } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import AccordionItem from "components/AccordionItem";
import PageSection from "components/PageSection";

const Product = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader, accordion } = frontmatter;

    return (
        <PageSection className={clsx("product-section", className)} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row>
                <Accordion defaultActiveKey="Где я могу забрать оборудование?" className="w-100">
                    {accordion.map(
                        ({ header, quest, answer, subheader }) => (
                            <AccordionItem
                                key={header}
                                header={header}
                                subheader={subheader}
                                quest={quest}
                                answer={answer}
                            />
                        ),
                    )}
                </Accordion>
            </Row>
        </PageSection>
    );
};

Product.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Product.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Product;
