import React from "react";
import "../../css/Navbar_css/Navbar.css";
import Country from "./Country";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RouterNav from "./RouterNav";

function Navbar() {
  return (
    <>
      <Country />

      {/* Navbar is started from Here */}
      <div className="main_navbar">
        <div className="main_navbar_content">
          <div className="main_navbar_logo">
            <img
              className="clone_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dermstore_logo.svg/768px-Dermstore_logo.svg.png"
              alt="DermStore_Logo"
            />
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
            <div className="account_section">
              <PersonOutlineOutlinedIcon className="account_icon" />
              <p className="account_name">Account</p>
            </div>

            <div className="cart_section">
              <Badge badgeContent={1} color="primary" className="cart_icon">
                <ShoppingBagOutlinedIcon color="black" />
              </Badge>
              <p className="cart_name">Cart</p>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar is ended Here */}

      <RouterNav />
    </>
  );
}

export default Navbar;
