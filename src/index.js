import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./style.css";
import { StateProvider } from "./store/StateProvider";
import reducer, { initialState } from "./reducer/reducer";
import { ProductsProvider } from "./store/ProductsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
