import React from "react";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "../store/StateProvider";

const Product = ({ products }) => {
  // console.log(products);
  const [{ basket }, dispatch] = useStateValue();

  const product = products.map((product) => {
    return product.id;
  });

  // console.log(title);

  const addToBasket = (id, title, price, rating, image) => {
    // if (product.id === id) {
    //   dispatch({ type: "ADD_TO_BASKET", item: { id: id } });
    // }
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <React.Fragment>
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div className="product__info">
              <p>{product.title}</p>
              <p className="product__price">
                <strong>$</strong>
                <strong>{product.price}</strong>
              </p>
              <div className="product__rating">
                {/* Creating an array of size $rating */}
                {Array(product.rating)
                  .fill()
                  .map((_, index) => (
                    <span key={index}>
                      <Star className="product__star" />
                    </span>
                  ))}
              </div>
            </div>
            <img src={product.image} alt="" />
            <button
              onClick={() =>
                addToBasket(
                  product.id,
                  product.title,
                  product.price,
                  product.rating,
                  product.image
                )
              }
            >
              Add to basket
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Product;
