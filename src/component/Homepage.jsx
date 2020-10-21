import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Banner from "./Banner";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  banner: {
    zIndex: -1,
  },
  grid: {
    padding: "0 1%",
    marginTop: -50,
    [theme.breakpoints.up("sm")]: {
      marginTop: -100,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: -150,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: -250,
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: -350,
    },
  },
}));

const Homepage = ({ banners, products }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: "#eaeded", paddingBottom: 20 }}
    >
      <Toolbar />
      <Container maxWidth="xl" style={{ padding: "0 3%" }}>
        <Banner banners={banners} className={classes.banner} />
        <Grid container spacing={2} className={classes.grid}>
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Product
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;
