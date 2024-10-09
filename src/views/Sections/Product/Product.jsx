import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import ProductItem from "components/ProductItem";
import PageSection from "components/PageSection";
import "./Product.scss";

const Product = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, products } = frontmatter;

  return (
    <PageSection className={clsx("product-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="justify-content-center">
        {products.map(
          ({
            content,
            extraInfo,
            header,
            imageFileName,
            imageFileNameDetail,
            subheader,
            subheaderOutside,
            more,
            close,
          }) => (
            <ProductItem
              key={header}
              imageFileName={imageFileName}
              header={header}
              subheader={subheader}
              subheaderOutside={subheaderOutside}
              more={more}
              close={close}
              content={content}
              imageFileNameDetail={imageFileNameDetail}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row>
      {/* <div className="mt-n3">
        <p className="text-muted mb-2">Постоянно действующие акции:</p>
        <ul>
          <li>Ортез и костыли на месяц за 2900 руб. с бесплатной доставкой и вывозом</li>
          <li>Алмаг на 10 дней за 1000 руб. с бесплатной доставкой</li>
        </ul>
      </div> */}
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
