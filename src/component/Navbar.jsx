import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../store/StateProvider";

const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log(basket);

  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="brand-logo"
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links on the right */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/signin" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Hello</span>
            <span className="header__optionTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Return</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionTwo">{basket?.length}</span>
          </div>
        </Link>
      </div>
      {/* basket icon */}
    </nav>
  );
};

export default Navbar;
