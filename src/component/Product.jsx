import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "../store/StateProvider";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 10,
    backgroundColor: "white",
    maxWidth: 345,
  },
  cardActionArea: {
    background: "inherit",
    // "&:hover": {
    //   cursor: "default",
    // },
  },
  media: {
    width: "100%",
    height: 150,
    objectFit: "contain",
    marginTop: 8,
  },
}));

const Product = ({ id, title, price, image, rating }) => {
  const classes = useStyles();

  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <Card className={classes.root}>
      <RouterLink
        to={`/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia
            className={classes.media}
            component="img"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="body1">
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="textSecondary"
              component="p"
            >
              <strong>$</strong> {price}
            </Typography>
            <Typography>
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <span key={index}>
                    <Star style={{ color: "gold" }} />
                  </span>
                ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </RouterLink>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "inherit",
        }}
      >
        <Button
          onClick={addToBasket}
          variant="contained"
          size="medium"
          color="secondary"
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
