import "../../css/Navbar_css/RouterNav.css";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Brands",
    path: "/brands",
  },
  {
    title: "Holiday Shop",
    path: "holiday+by",
  },
  {
    title: "Browse By",
    path: "browse+by",
  },
  {
    title: "Bestsellers",
    path: "bestsellers",
  },
  {
    title: "Skin Care",
    path: "skin+care",
  },
  {
    title: "Makeup",
    path: "makeup",
  },
  {
    title: "Hair Care",
    path: "hair+care",
  },
  {
    title: "Bath & Body",
    path: "bath+and+body",
  },
  {
    title: "Fragrance Shop",
    path: "fragrance+shop",
  },
  {
    title: "Tools & Devices",
    path: "tools+and+devices",
  },
  {
    title: "Gifts & Sets",
    path: "gifts+and+sets",
  },
  {
    title: "BeautyFIX",
    path: "beauty+fix",
  },
  {
    title: "Offers",
    path: "offers",
  },
  {
    title: "New",
    path: "new",
  },
  {
    title: "Skin 101",
    path: "skin+101",
  },
];

function RouterNav() {
  return (
    <div className="router_nav_main">
      <div className="router_container">
        {links.map((link) => (
          <div className="router_link_container">
            <NavLink className="all_router_link" to={link.path}>
              {link.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RouterNav;
