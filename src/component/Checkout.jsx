import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { useStateValue } from "../store/StateProvider";
import EmptyBasket from "./EmptyBasket";
import ProductBasket from "./ProductBasket";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "#eaeded8e",
    backgroundColor: "#f5f5f5",
  },
}));

const Checkout = () => {
  const classes = useStyles();

  const [{ basket }] = useStateValue();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Container
        maxWidth="lg"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        {basket.length !== 0 ? <ProductBasket /> : <EmptyBasket />}
      </Container>
    </div>
  );
};

export default Checkout;
