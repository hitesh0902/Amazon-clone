import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  shoppingContainer: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  shoppingBox: {
    margin: "40px 0",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },
  },
  shoppingBoxButtons: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const EmptyBasket = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography variant="subtitle2">
        Pay faster for all your shopping needs{" "}
        <span style={{ color: "darkred" }}>with Amazon Pay balance</span>
      </Typography>
      <Typography variant="body2">
        Get Instant refund on cancellations | Zero payment failures
      </Typography>
      <Container maxWidth="lg" className={classes.shoppingContainer}>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.shoppingBox}
        >
          <img
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt="empty"
            style={{
              display: "block",
              maxWidth: 400,
              width: "100%",
              height: "100%",
            }}
          />
          <div>
            <Typography variant="h6">Your Amazon Basket is empty</Typography>
            <Typography gutterBottom variant="body2" color="primary">
              <RouterLink
                to="/"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Shop today’s deals
              </RouterLink>
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              className={classes.shoppingBoxButtons}
            >
              <RouterLink
                to="/signin"
                style={{
                  textDecoration: "none",
                  marginRight: 10,
                  marginBottom: 15,
                }}
              >
                <Button variant="contained" color="secondary">
                  Sign in to our Account
                </Button>
              </RouterLink>
              <RouterLink to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="contained">Sign up now</Button>
              </RouterLink>
            </Box>
          </div>
        </Box>
      </Container>
      <Typography variant="caption">
        The price and availability of items at Amazon.in are subject to change.
        The shopping cart is a temporary place to store a list of your items and
        reflects each item's most recent price.
        <br />
        Do you have a promotional code? We'll ask you to enter your claim code
        when it's time to pay.
      </Typography>
    </Container>
  );
};

export default EmptyBasket;
