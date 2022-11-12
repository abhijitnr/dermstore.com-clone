import React, { useContext, useEffect, useState } from 'react'
import { Flex, Spacer, Box, Image, Text } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CartContext from '../../Context/CartContext';
import ProductContext from '../../Context/ProductContext';
export default function CountSection({getCount}) {
    const [count, setCount] = useState(1);
    const { setCartValue, cartPrices } = useContext(CartContext);
    const {products} = useContext(ProductContext);

    //
    const calculate = (val) => {
      setCount((prev) => prev + val);
    };
    //
    useEffect(() => {
      getCount(count)
      setCartValue((prev) => {
        return (
          cartPrices.reduce((previousVal, currentVal) => {
            return previousVal + currentVal;
          },0)
        )
      })
    },[count, cartPrices])

    //
  return (
    
    <Flex align={'center'} >
    <AiOutlineMinus onClick={ () => (
      count === 1 ? null : calculate(-1)
    )}/>
    <Text mx={'0.5rem'}>{count}</Text>
    <AiOutlinePlus onClick={()=>{
      calculate(1);
      }}/>
    </Flex>
  )
}
