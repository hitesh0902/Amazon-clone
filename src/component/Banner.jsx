import React from "react";
import Carousel from "react-material-ui-carousel";

const Banner = ({ banners }) => {
  return (
    <Carousel indicators={false} animation="slide">
      {banners.map((banner) => (
        <div key={banner.id}>
          <img src={banner.src} alt="banner" className="banner" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
