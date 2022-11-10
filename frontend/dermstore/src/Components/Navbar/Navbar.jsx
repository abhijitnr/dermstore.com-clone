import "../../css/Navbar_css/Navbar.css";
import Country from "./Country";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RouterNav from "./RouterNav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [anchorAccount, setAnchorAccount] = useState(null);
  const [anchorCart, setAnchorCart] = useState(null);

  // Dropdown Menu for Account
  const openAccount = Boolean(anchorAccount);
  const handleClickAccount = (event) => {
    setAnchorAccount(event.currentTarget);
  };
  const handleCloseAccount = () => {
    setAnchorAccount(null);
  };

  // Dropdown Menu for Cart
  const openCart = Boolean(anchorCart);
  const handleClickCart = (event) => {
    setAnchorCart(event.currentTarget);
  };
  const handleCloseCart = () => {
    setAnchorCart(null);
  };

  return (
    <>
      <Country />

      {/* Navbar is started from Here */}
      <div className="main_navbar">
        <div className="main_navbar_content">
          <div className="main_navbar_logo">
            <Link to="/">
              <img
                className="clone_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dermstore_logo.svg/768px-Dermstore_logo.svg.png"
                alt="DermStore_Logo"
              />
            </Link>
          </div>

          <div className="main_navbar_search">
            <div className="search_input_icon">
              <input
                type="text"
                className="seacrch_input"
                placeholder="Search for a product or brand..."
              />

              <SearchOutlinedIcon className="search_icon" />
            </div>
          </div>

          <div className="main_navbar_account_cart">
            <div
              className="account_section"
              id="fade-button"
              aria-controls={openAccount ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openAccount ? "true" : undefined}
              onClick={handleClickAccount}
            >
              <PersonOutlineOutlinedIcon className="account_icon" />
              <p className="account_name">Account</p>
            </div>

            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorAccount}
              open={openAccount}
              onClose={handleCloseAccount}
              TransitionComponent={Fade}
            >
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleCloseAccount}>LOGIN</MenuItem>
              </NavLink>
              <NavLink
                to="/register"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleCloseAccount}>REGISTER</MenuItem>
              </NavLink>
            </Menu>

            <div
              className="cart_section"
              id="fade-button"
              aria-controls={openCart ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openCart ? "true" : undefined}
              onClick={handleClickCart}
            >
              <Badge badgeContent={1} color="primary" className="cart_icon">
                <ShoppingBagOutlinedIcon color="black" />
              </Badge>
              <p className="cart_name">Cart</p>
            </div>

            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorCart}
              open={openCart}
              onClose={handleCloseCart}
              TransitionComponent={Fade}
            >
              <NavLink
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleCloseCart}>VIEW CART</MenuItem>
              </NavLink>
            </Menu>
          </div>
        </div>
      </div>
      {/* Navbar is ended Here */}

      <RouterNav />
    </>
  );
}

export default Navbar;
