import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 1%",
  },
}));

const Banner = ({ banners }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Carousel indicators={false} animation="slide">
        {banners.map((banner) => (
          <div key={banner.id}>
            <img src={banner.src} alt="banner" className="banner" />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;
