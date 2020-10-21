import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../store/StateProvider";
import Star from "@material-ui/icons/Star";
import Subtotal from "./Subtotal";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    width: "100%",
    height: 150,
    objectFit: "contain",
    // height: 0,
    // paddingTop: "56.25%", // 16:9
  },
  box: {
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  grid: {
    maring: 0,
    marginBottom: 10,
    [theme.breakpoints.up("md")]: {
      marginRight: 10,
      marginBottom: 0,
    },
  },
}));

const ProductBasket = () => {
  const classes = useStyles();

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };

  return (
    <div>
      <Typography
        variant="h5"
        color="textPrimary"
        style={{ textAlign: "center" }}
      >
        Your Amazon Basket
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        className={classes.box}
      >
        <Grid container spacing={4} className={classes.grid}>
          {basket.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              lg={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card className={classes.card}>
                <CardHeader
                  disableTypography
                  title={<Typography variant="body1">{item.title}</Typography>}
                />
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography variant="subtitle1">$ {item.price}</Typography>
                  <Typography variant="body2" component="p">
                    {Array(item.rating)
                      .fill()
                      .map((_, index) => (
                        <span key={index}>
                          <Star style={{ color: "gold" }} />
                        </span>
                      ))}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: "0 auto" }}
                    onClick={() => removeFromBasket(item.id)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Subtotal />
      </Box>
    </div>
  );
};

export default ProductBasket;
