import React, { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Echo Dot– New and improved speaker with Alexa",
      price: 50.49,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg",
    },
    {
      id: 2,
      title: "Kindle Paperwhite - with Built-in Light, Waterproof",
      price: 34.59,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/41aTw6F6DDL._AC_UY218_.jpg",
    },
    {
      id: 3,
      title: "Ikigai: The Japanese secret to long happy life",
      price: 30.49,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone (limited)",
      price: 10.49,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    },
    {
      id: 5,
      title: "Artist's Loft Acrylic Paint Value Pack 36 Piece",
      price: 50.49,
      rating: 3,
      image:
        "https://m.media-amazon.com/images/I/61GEW-MekwL._AC_UL480_QL65_.jpg",
    },
    {
      id: 6,
      title: "Samsung 138 cm (55 Inches) 4K UHD QLED Smart",
      price: 199,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SL1500_.jpg",
    },
    {
      id: 7,
      title: "Boult Audio BassBuds X1 in-Ear Wired Earphones",
      price: 10,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71ERrkBqNCL._AC_UY218_.jpg",
    },
    {
      id: 8,
      title: "HP Laserjet M1005 Multifunction Laser Printer",
      price: 40,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/817TW1tPNuL._SL1500_.jpg",
    },
    {
      id: 9,
      title: "Storite 15.6 Inch Laptop Backpack Bag (Dark Blue)",
      price: 35.66,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/9137byacAbL._SL1500_.jpg",
    },
    {
      id: 10,
      title: "Fitspire Plant Protein & Fit Curcumin (2Pack)",
      price: 40,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81%2BBIeq8U8L._SL1500_.jpg",
    },
    {
      id: 11,
      title: "Smartphone 4 GB RAM and 64 GB Storage (Amoled)",
      price: 199,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61L1ItFgFHL._SL1500_.jpg",
    },
    {
      id: 12,
      title: "Lifelong Glass Top 3 Burner Gas Stove, Black",
      price: 64.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51wg48w2LqL._SL1000_.jpg",
    },
  ]);

  const value = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
