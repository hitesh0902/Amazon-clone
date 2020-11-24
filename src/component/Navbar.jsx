import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { makeStyles, fade } from "@material-ui/core/styles";
import { useStateValue } from "../store/StateProvider";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ReplayIcon from "@material-ui/icons/Replay";
import NewReleasesIcon from "@material-ui/icons/NewReleases";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: "block",
    width: 66,
    marginTop: 13,
    marginRight: 10,
    objectFit: "contain",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      marginRight: 0,
      width: 80,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  routerLinks: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [{ basket }] = useStateValue();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <RouterLink
        to="/signin"
        style={{ color: "black", textDecoration: "none" }}
      >
        <MenuItem>
          <IconButton color="inherit" aria-label="signin">
            <AccountBoxIcon />
          </IconButton>
          Hello, Signin
        </MenuItem>
      </RouterLink>
      <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
        <MenuItem>
          <IconButton color="inherit" aria-label="basket">
            <ReplayIcon />
          </IconButton>
          Returns & Orders
        </MenuItem>
      </RouterLink>
      <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
        <MenuItem>
          <IconButton color="inherit" aria-label="basket">
            <NewReleasesIcon />
          </IconButton>
          Try Prime
        </MenuItem>
      </RouterLink>
      <RouterLink
        to="/checkout"
        style={{ color: "black", textDecoration: "none" }}
      >
        <MenuItem>
          <IconButton color="inherit" aria-label="basket">
            <Badge badgeContent={basket.length} color="error">
              <ShoppingCartIcon style={{ color: "black" }} />
            </Badge>
          </IconButton>
          Checkout
        </MenuItem>
      </RouterLink>
    </Menu>
  );

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <RouterLink to="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="brand-logo"
              className={classes.logo}
            />
          </RouterLink>
          <div className={classes.search} style={{ width: "100%" }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              style={{ width: "100%" }}
            />
          </div>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.sectionDesktop}
          >
            <RouterLink to="/signin" className={classes.routerLinks}>
              Hello Signin{" "}
            </RouterLink>
            <RouterLink to="/" className={classes.routerLinks}>
              Returns Orders
            </RouterLink>
            <RouterLink to="/" className={classes.routerLinks}>
              Try Prime
            </RouterLink>
            <RouterLink to="/checkout">
              <IconButton color="inherit" aria-label="basket">
                <Badge badgeContent={basket.length} color="error">
                  <ShoppingCartIcon style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </RouterLink>
          </Box>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              style={{ padding: 0 }}
            >
              <Badge badgeContent={basket.length ? "!" : null} color="error">
                <MoreIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Navbar;
