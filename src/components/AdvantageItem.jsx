import React from "react";
import PropTypes from "prop-types";

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";
import "./AdvantageItem.scss";

const AdvantageItem = ({ iconName, imageFileName, header, content }) => {
    let iconPart;
    if (iconName) {
        iconPart = <CircleFAButton iconName={iconName} />;
    }

    let imagePart;
    if (imageFileName) {
        imagePart = <Image className="advantage-item-image" fileName={imageFileName} />;
    }

    return (
        <>
            {iconPart}
            {imagePart}
            <h4 className="advantage-item-heading">{header}</h4>
            <p className="text-muted">{content}</p>
        </>
    );
};

AdvantageItem.propTypes = {
    iconName: PropTypes.string,
    imageFileName: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string,
};

AdvantageItem.defaultProps = {
    iconName: null,
    imageFileName: null,
    header: "",
    content: "",
};

export default AdvantageItem;
