import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { Cart } from "../pages/cart_section/Cart";
import HomePage from "../pages/HomePage";
import Preview from "../pages/Preview";

function AllRoutes() {
  return (
    <div
    // style={{
    //   marginTop: "169px",
    // }}
    >
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/preview/:id" element={<Preview></Preview>} />
        <Route path="/brands" element={<h1>BRANDS</h1>} />
        <Route path="/holiday+by" element={<h1>HOLIDAY BY</h1>} />
        <Route path="/browse+by" element={<h1>BROWSE BY</h1>} />
        <Route path="/bestsellers" element={<h1>BESTSELLERS</h1>} />
        <Route path="/skin+care" element={<h1>SKIN CARE</h1>} />
        <Route path="/makeup" element={<h1>MAKEUP</h1>} />
        <Route path="/hair+care" element={<h1>HAIR CARE</h1>} />
        <Route path="/bath+and+body" element={<h1>BATH AND BODY</h1>} />
        <Route path="/fragrance+shop" element={<h1>FRAGRANCE SHOP</h1>} />
        <Route path="/tools+and+devices" element={<h1>TOOLS AND DEVICES</h1>} />
        <Route path="/gifts+and+sets" element={<h1>GIFTS AND SETS</h1>} />
        <Route path="/beauty+fix" element={<h1>BEAUTY-FIX</h1>} />
        <Route path="/offers" element={<h1>OFFERS</h1>} />
        <Route path="/new" element={<h1>NEW</h1>} />
        <Route path="/skin+101" element={<h1>SKIN 101</h1>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
