import React from "react";
import Navbar from "../component/Navbar";
import Homepage from "../component/Homepage";
import Footer from "../component/Footer";

const banners = [
  {
    id: 1,
    src:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/5_DesktopHero_Unrec_1500x600-aa._CB419164846_.jpg",
  },
  {
    id: 2,
    src:
      "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
  },
  {
    id: 3,
    src:
      "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  },

  {
    id: 4,
    src:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/Phase1_Hero/V2_PC/DesktopHero_SL_1500x600unrec._CB419428506_.jpg",
  },
];

// const products = [
//   {
//     id: 1,
//     title: "Echo Dot– New and improved speaker with Alexa",
//     price: 50.49,
//     rating: 5,
//     image: "https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg",
//   },
//   {
//     id: 2,
//     title: "Kindle Paperwhite - with Built-in Light, Waterproof",
//     price: 34.59,
//     rating: 4,
//     image: "https://m.media-amazon.com/images/I/41aTw6F6DDL._AC_UY218_.jpg",
//   },
//   {
//     id: 3,
//     title: "Ikigai: The Japanese secret to long happy life",
//     price: 30.49,
//     rating: 4,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Philosopher's Stone (limited)",
//     price: 10.49,
//     rating: 5,
//     image: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
//   },
//   {
//     id: 5,
//     title: "Artist's Loft Acrylic Paint Value Pack 36 Piece",
//     price: 50.49,
//     rating: 3,
//     image:
//       "https://m.media-amazon.com/images/I/61GEW-MekwL._AC_UL480_QL65_.jpg",
//   },
//   {
//     id: 6,
//     title: "Samsung 138 cm (55 Inches) 4K UHD QLED Smart",
//     price: 199,
//     rating: 4,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SL1500_.jpg",
//   },
//   {
//     id: 7,
//     title: "Boult Audio BassBuds X1 in-Ear Wired Earphones",
//     price: 10,
//     rating: 4,
//     image: "https://m.media-amazon.com/images/I/71ERrkBqNCL._AC_UY218_.jpg",
//   },
//   {
//     id: 8,
//     title: "HP Laserjet M1005 Multifunction Laser Printer",
//     price: 40,
//     rating: 5,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/817TW1tPNuL._SL1500_.jpg",
//   },
//   {
//     id: 9,
//     title: "Storite 15.6 Inch Laptop Backpack Bag (Dark Blue)",
//     price: 35.66,
//     rating: 3,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/9137byacAbL._SL1500_.jpg",
//   },
//   {
//     id: 10,
//     title: "Fitspire Plant Protein & Fit Curcumin (2Pack)",
//     price: 40,
//     rating: 4,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81%2BBIeq8U8L._SL1500_.jpg",
//   },
//   {
//     id: 11,
//     title: "Smartphone 4 GB RAM and 64 GB Storage (Amoled)",
//     price: 199,
//     rating: 4,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/61L1ItFgFHL._SL1500_.jpg",
//   },
//   {
//     id: 12,
//     title: "Lifelong Glass Top 3 Burner Gas Stove, Black",
//     price: 64.99,
//     rating: 3,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/51wg48w2LqL._SL1000_.jpg",
//   },
// ];

const HomeView = () => {
  return (
    <div className="root">
      <Navbar />
      <Homepage banners={banners} />
      <Footer />
    </div>
  );
};

export default HomeView;
