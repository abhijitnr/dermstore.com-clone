import React from "react";
import "../../css/Navbar_css/Country.css";

function Country() {
  return (
    <div className="navbar_country">
      <div className="navbar_country_laguage">
        <img
          className="country_flag"
          src="https://img.freepik.com/free-vector/grunge-american-flag-background-ideal-independence-day_1048-2172.jpg?w=360"
          alt="country_icon"
        />
        <p className="country_name">us</p>
        <p className="space_separator">-</p>
        <p className="country_currency">USD</p>
      </div>
    </div>
  );
}

export default Country;
