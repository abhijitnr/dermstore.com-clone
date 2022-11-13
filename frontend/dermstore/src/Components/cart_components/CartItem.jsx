import React, { useEffect, useState } from "react";
import { Flex, Spacer, Box, Image, Text } from "@chakra-ui/react";
import CountSection from "./CountSection";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/Cart/cart.action";
function CartItem({ product, quantity }) {
  let price = product.price || 10;


  const dispatch = useDispatch();

  return (
    <>
      <Flex fontSize={'1.2rem'} justify='space-between' align={'center'} px='0.3rem'>
        <Box>
          <Image
            w={"50px"}
            src={product.url}
            alt=""
          />
        </Box>
        <Box>
          <Text>{product.name}</Text>
          {/* <Text>{product.description}</Text> */}
        </Box>
        <Box>
          <Text>${price}</Text>
        </Box>
        <Box>
          <CountSection price={price} quantity={quantity} id={product.id} />
        </Box>
        <Box><Text>{price * quantity}</Text></Box>
        <Box ><FaTimes onClick={() => { dispatch(removeCart(product.id,"")) }} /></Box>
      </Flex>
    </>
  );
}

export default CartItem;
