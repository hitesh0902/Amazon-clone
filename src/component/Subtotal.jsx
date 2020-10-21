import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";
import { getBasketTotal } from "../reducer/reducer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <Box display="flex" justifyContent="center">
      <Paper style={{ padding: 15, width: "100%" }}>
        <CurrencyFormat
          renderText={(value) => (
            <div style={{ marginBottom: 5 }}>
              <Typography gutterBottom variant="h6">
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
              </Typography>
              <Box display="flex" alignItems="center">
                <input type="checkbox" />
                <Typography variant="body2">
                  This order contains a gift
                </Typography>
              </Box>
            </div>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <Button variant="contained" size="small" disableElevation>
          Proceed to checkout
        </Button>
      </Paper>
    </Box>
  );
};

export default Subtotal;
