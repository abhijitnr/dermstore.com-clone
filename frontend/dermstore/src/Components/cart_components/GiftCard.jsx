import React from 'react'
import { Box } from "@chakra-ui/react";
import CartCSS from "../../pages/cart_section/Cart.module.css";
import { BsChevronUp } from "react-icons/bs";
function GiftCard() {
  return (
    <Box className={CartCSS.giftSection} px='1rem' >
              <div>
                <h2>Gift Section</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <span>
                <BsChevronUp size={22} style={{ fontWeight: "bolder" }} />
              </span>
    </Box>
  )
}

export default GiftCard
