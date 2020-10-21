import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import HomeView from "./layout/HomeView";
import CheckoutView from "./layout/CheckoutView";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#232f3e",
    },
    secondary: {
      main: "#FFB400",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/checkout">
              <CheckoutView />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
