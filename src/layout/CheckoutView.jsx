import React from "react";
import Checkout from "../component/Checkout";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const CheckoutView = () => {
  return (
    <div className="root">
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutView;
