import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Footer from "./component/Footer";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Checkout from "./component/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/checkout">
            <Navbar />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/">
            <Navbar />
            <Homepage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
