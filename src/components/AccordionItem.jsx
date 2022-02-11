import React from "react";
import PropTypes from "prop-types";
import { Accordion, Card } from "react-bootstrap";
import "./AccordionItem.scss";
import "./TeamMember.scss";

const AccordionItem = ({
    quest,
    answer
}) => {

    return (
        <Card >
            <Accordion.Toggle as={Card.Header} eventKey={quest} className="text-center">
                <h6>{quest}</h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={quest}>
                <Card.Body>
                    <p className="text-muted mb-0">{answer}</p>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

AccordionItem.propTypes = {
    quest: PropTypes.string,
    answer: PropTypes.string
};

AccordionItem.defaultProps = {
    quest: "",
    answer: ""
};

export default AccordionItem;
