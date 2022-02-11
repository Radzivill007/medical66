import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import Image from "components/Image";
import Icon from "./Icon";

const ProductDetailDialog = ({
    onHide,
    imageFileName,
    imageAlt,
    header,
    subheader,
    content,
    close,
    extraInfo,
    ...restProps
}) => {
    return (
        <Modal
            {...restProps}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="mx-auto">
                <p className="item-intro text-muted">{subheader}</p>
                <Image
                    className="img-fluid d-block"
                    fileName={imageFileName}
                    alt={imageAlt || header || subheader}
                />
                <p>{content}</p>
                {extraInfo}
                Для заказа или консультации звоните по номеру <a href="tel:89120514095">8-912-051-40-95</a>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-around">

                <div>
                    <Button
                        variant="success"
                        target="_blank"
                        rel="noreferrer"
                        href="https://api.whatsapp.com/send?phone=79120514095&text=Здравствуйте,%20я%20хочу%20арендовать"
                    >
                        <Icon iconName="WhatsappIcon" />
                        &nbsp; Написать в WhatsApp
                    </Button>
                </div>
                <div>
                    <Button variant="primary" onClick={onHide}>
                        <Icon iconName="CloseIcon" />
                        &nbsp; {close}
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

ProductDetailDialog.propTypes = {
    onHide: PropTypes.func,
    imageFileName: PropTypes.string,
    imageAlt: PropTypes.string,
    header: PropTypes.string,
    subheader: PropTypes.string,
    content: PropTypes.string,
    close: PropTypes.string,
    extraInfo: PropTypes.any,
};

ProductDetailDialog.defaultProps = {
    onHide: null,
    imageFileName: "",
    imageAlt: null,
    header: "",
    subheader: "",
    content: "",
    close: "",
    extraInfo: null,
};

export default ProductDetailDialog;
