import React from "react";
import PropTypes from "prop-types";

import { Col, Button } from "react-bootstrap";
import Image from "components/Image";
import ProductDetailDialog from "components/ProductDetailDialog";

import "./ProductItem.scss";

const ProductItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  subheaderOutside,
  more,
  close,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={6} lg={4} className="product-item p-2">
        <div className="product-wrap">
          <Image
            className="product-img"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className="product-caption">
            <h4 className="mb-2">{header}</h4>
            {subheaderOutside ? (
              <p className="text-muted mb-2">{subheaderOutside}</p>
            ) : (
              <p className="text-muted mb-2">{subheader}</p>
            )}
            <div>{extraInfo}</div>
            <Button className="btn" size="lg" variant="primary" data-toggle="modal" onClick={handleShowDetail}>
              {more}
            </Button>
          </div>
        </div>
      </Col>
      <ProductDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail || imageFileName}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        subheader={subheader}
        close={close}
        content={content}
        extraInfo={extraInfo}
      />
    </>
  );
};

ProductItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  subheaderOutside: PropTypes.string,
  content: PropTypes.string,
  more: PropTypes.string,
  close: PropTypes.string,
  imageFileNameDetail: PropTypes.any,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
};

ProductItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  subheaderOutside: "",
  content: "",
  more: "",
  close: "",
  imageFileNameDetail: null,
  imageAltDetail: "",
  extraInfo: null,
};

export default ProductItem;
