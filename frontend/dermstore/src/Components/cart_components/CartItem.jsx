import React, { useContext, useEffect, useState } from "react";
import { Flex, Spacer, Box, Image, Text } from "@chakra-ui/react";
import CountSection from "./CountSection";
import { FaTimes } from "react-icons/fa";
import CartContext from "../../Context/CartContext";
import ProductContext from "../../Context/ProductContext";
function CartItem({data : {price, _id}}) {
    const [total, setTotal] = useState(price);
    const {setCartPrices} = useContext(CartContext);
    const {deleteItem, products} = useContext(ProductContext);

    const getCount = (count) => {
      setTotal(count*price)
    }

    useEffect(() => {
      setCartPrices((prev) => [...prev,total])
    },[total])
 
  return (
    <>
      <Flex fontSize={'1.2rem'} justify='space-between' align={'center'} px='0.3rem'>
        <Box>
          <Image
            src="https://static.thcdn.com//productimg/70/70/13985788-8294996958046114.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Text>EltaMD UV Luminous Broad Spectrum SPF 41, 1.7 oz</Text>
          <Text>In stock - Usually dispatched within 24 hours</Text>
        </Box>
        <Box>
          <Text>${price}</Text>
        </Box>
        <Box>
          <CountSection getCount={getCount} /> 
        </Box>
        <Box><Text>{total}</Text></Box>
        <Box ><FaTimes onClick={() => deleteItem(_id)}/></Box>
      </Flex>
    </>
  );
}

export default CartItem;
