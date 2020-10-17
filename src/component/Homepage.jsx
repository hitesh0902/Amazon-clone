import React, { useState } from "react";
import Product from "./Product";

const Homepage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title:
        "Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)",
      price: 50.49,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg",
    },
    {
      id: 2,
      title:
        "Kindle Paperwhite (10th gen) - with Built-in Light, Waterproof, 8 GB, WiFi",
      price: 34.59,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/41aTw6F6DDL._AC_UY218_.jpg",
    },
    {
      id: 3,
      title: "Ikigai: The Japanese secret to a long and happy life",
      price: 30.49,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
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
      title: "Samsung 138 cm (55 Inches) 4K UHD QLED Smart TV",
      price: 199,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SL1500_.jpg",
    },
    {
      id: 7,
      title: "Boult Audio BassBuds X1 in-Ear Wired Earphones with Mic",
      price: 10,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71ERrkBqNCL._AC_UY218_.jpg",
    },
    {
      id: 8,
      title: "HP Laserjet M1005 Multifunction Laser Printer (Black)",
      price: 40,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/817TW1tPNuL._SL1500_.jpg",
    },
    {
      id: 9,
      title:
        "Storite 15.6 Inch Laptop Backpack Bag (Dark Blue, 40 x 30x 12 cm)",
      price: 35.66,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/9137byacAbL._SL1500_.jpg",
    },
    {
      id: 10,
      title: "Fitspire Plant Protein & Fit Curcumin (Combo Of 2)",
      price: 40,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81%2BBIeq8U8L._SL1500_.jpg",
    },
  ]);

  const products_row1 = products.slice(0, 2);
  const products_row2 = products.slice(2, 6);
  const products_row3 = products.slice(6, 11);
  // console.log(products_row1);
  // console.log(products_row2);
  // console.log(products_row3);

  return (
    <div className="home content">
      <div className="home__wrapper">
        {/* <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        className="home__image"
        alt="banner"
      /> */}
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          className="home__image"
          alt="banner"
        />

        {/* Products */}
        <div className="home__row">
          <Product products={products_row1} />
        </div>

        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          className="home__banner"
          alt=""
        />
        <div className="home__row">
          <Product products={products_row2} />
        </div>
        <div className="home__row">
          <Product products={products_row3} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
