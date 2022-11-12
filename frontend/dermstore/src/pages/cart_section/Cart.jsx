import React from "react";
import CartCSS from './Cart.module.css'
import { Box } from "@chakra-ui/react";
import Checkoutbtn from "../../Components/cart_components/Checkoutbtn";
import Bar from "../../Components/cart_components/Bar";
import { BsStars } from "react-icons/bs";
import CartItem from "../../Components/cart_components/CartItem";
import ProductContext from "../../Context/ProductContext";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import Discount from "../../Components/cart_components/Discount";

import GiftCard from "../../Components/cart_components/GiftCard";
export function Cart() {
  const { products } = useContext(ProductContext);
  const { productPrice, cartValue } = useContext(CartContext);
  // console.log(products);
  return (
    <>
      <div className={CartCSS.main}>
        <div className={CartCSS.btnDiv}>
          <h4>Your Cart</h4>
          <Checkoutbtn />
        </div>
        <div className={CartCSS.alert}>
          <Bar />
        </div>
        {/* <div> <Bar props={'green'}/></div> */}
        <div className={CartCSS.items}>
          {/* List Section */}
          <div className={CartCSS.list}>
            {products.map((data) => (
              <CartItem data={data} />
            ))}
          </div>
          {/* Offer Section */}
          <div className={CartCSS.offer}>
            {/* giftcard */}
            <GiftCard />
            <p>Qulification</p>
            <p>Lorem ipsum dolor sit.</p>
            <div className={CartCSS.offerItems}>
              <div>
                <img
                  src="https://static.thcdn.com//productimg/70/70/13169882-1944973340032844.jpg"
                  alt=""
                />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "51.7%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <BsStars />
              <h4>Rewards members earn 720 points on this order</h4>{" "}
            </div>
            <div>
              <p>
                Cart Total: <span>{cartValue}</span>
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
