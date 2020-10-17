import React from "react";
import { useStateValue } from "../store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout content">
      {basket?.length === 0 ? (
        <div className="checkout__containerEmpty">
          <img
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt=""
            className="checkout__containerEmpty-image"
          />
          <div className="checkout__containerEmpty-box">
            <h2>Your Amazon Basket is empty</h2>
            <Link to="/" className="button">
              Start Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="checkout__containerContent">
          <h2>Your Amazon Basket</h2>
          {/* List of all the checkout products */}
          {basket?.map((item) => (
            <CheckoutProduct
              //   key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
