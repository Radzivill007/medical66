import React from "react";
import PropTypes from "prop-types";

import { Row, Button } from "react-bootstrap";
// import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = ({ className, frontmatter }) => {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://62a1cd4dcc8c0118ef554cea.mockapi.io/Medical66")
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
        setIsLoading(false);
      });
  }, []);

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
    speed: 400,
    touchThreshold: 50,
    swipeToSlide: true,
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
          href="https://www.avito.ru/brands/i4845421/all?sellerId=dfa3b8c3c1edae813c6a516aff36b715"
          target="_blank"
          variant="outline"
          className="mr-3"
        >
          Смотреть все отзывы
        </Button>
      </Row>
      <Slider {...settings}>
        {isLoading ? (
          <div className="team-mock-block">Загрузка...</div>
        ) : (
          images.map((image, index) => (
            <div key={image.item} className="team-image">
              <img src={`${image.item}`} alt={`feedback-${index}`} />
            </div>
          ))
        )}
      </Slider>
      {/* <Slider {...settings}>
        {teamMember.map(({ imageFileName, imageAlt }) => (
          <TeamMember key={imageFileName} imageFileName={imageFileName} imageAlt={imageAlt} />
        ))}
      </Slider> */}
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
