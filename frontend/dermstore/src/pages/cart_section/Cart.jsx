import React from "react";
import CartCSS from "./Cart.module.css";
import { Box } from "@chakra-ui/react";
import Checkoutbtn from "../../Components/cart_components/Checkoutbtn";
import { BsStars } from "react-icons/bs";
import CartItem from "../../Components/cart_components/CartItem";
import Discount from "../../Components/cart_components/Discount";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../redux/Cart/cart.action";

export function Cart() {
  const dispatch = useDispatch();
  const { cartItems, price } = useSelector((store) => store.cart);

  React.useEffect(() => {
    dispatch(getCarts("g"));
  }, []);
  // console.log(cartItems)

  return (
    <>
      <div
        className={CartCSS.main}
        style={{
          marginLeft: "50px",
        }}
      >
        <div className={CartCSS.btnDiv}>
          <h4>Your Cart</h4>
          <Checkoutbtn />
        </div>
        <div className={CartCSS.alert}>{/* <Bar /> */}</div>
        {/* <div> <Bar props={'green'}/></div> */}
        <div className={CartCSS.items}>
          {/* List Section */}
          <div className={CartCSS.list}>
            {cartItems.map((data, i) => (
              <CartItem key={i} {...data} />
            ))}
          </div>
          {/* Offer Section */}
          {/* <div className={CartCSS.offer}> */}
          {/* giftcard */}
          {/* <GiftCard /> */}
          {/* <div className={CartCSS.offerItems}>
              <div>
                <img
                  src="https://static.thcdn.com//productimg/70/70/13169882-1944973340032844.jpg"
                  alt=""
                />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div> */}
          {/* </div> */}
        </div>
        <div style={{ width: "51.7%", margin: "auto", marginTop: "50px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <BsStars />
              <h4>Rewards members earn 720 points on this order</h4>{" "}
            </div>
            <div>
              <p>
                Cart Total: <span>{price.toFixed(2)}</span>
              </p>{" "}
            </div>
          </div>
          {/* discount */}
          <Box>
            <Discount />
          </Box>
        </div>
      </div>
    </>
  );
}
