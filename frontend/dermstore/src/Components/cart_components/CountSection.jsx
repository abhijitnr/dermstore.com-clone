import React, { useContext, useEffect, useState } from 'react'
import { Flex, Spacer, Box, Image, Text } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { cartDecQty, cartIncQty } from "../../redux/Cart/cart.action";


export default function CountSection({ id,price, quantity }) {

  //

  //
  const dispatch = useDispatch();

  //
  return (

    <Flex align={'center'} >
      <AiOutlineMinus
        onClick={() => {
          quantity>0 && dispatch(cartDecQty(id,price,quantity,"g"))
        }}
      />
      <Text mx={'0.5rem'}>{quantity}</Text>
      <AiOutlinePlus onClick={() => {
        dispatch(cartIncQty(id,price,quantity,"g"))

      }} />
    </Flex>
  )
}
