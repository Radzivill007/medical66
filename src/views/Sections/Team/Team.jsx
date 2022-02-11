import React from "react";
import PropTypes from "prop-types";

import { Row, Button } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember } = frontmatter;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="justify-content-end">
        <Button
          href="https://www.avito.ru/user/8968d2a181c9a641fcc425527de9b84f/profile?id=2059266830&src=item"
          target="_blank"
          variant="outline"
          className="mr-3"
        >
          Смотреть все отзывы
        </Button>
      </Row>
      <Slider {...settings}>
        {teamMember.map(({ imageFileName, imageAlt }) => (
          <TeamMember key={imageFileName} imageFileName={imageFileName} imageAlt={imageAlt} />
        ))}
      </Slider>
    </PageSection>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;
