import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import "./TeamMember.scss";

const TeamMember = ({
    imageFileName,
    imageAlt
}) => {

    return (
        <div className="p-3">
            <Image
                className="image-slider"
                fileName={imageFileName}
                alt={imageAlt || imageFileName}
            />
        </div>
    );
};

TeamMember.propTypes = {
    imageFileName: PropTypes.string.isRequired,
    imageAlt: PropTypes.string
};

TeamMember.defaultProps = {
    imageAlt: null
};

export default TeamMember;
