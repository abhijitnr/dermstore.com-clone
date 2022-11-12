import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'

function Discount() {
    const [coupon, setCoupon] = useState('')
    const {applyDiscount} = useContext(CartContext)
    const onClick = () => {
        const offerCode = "bikram123";
        if(coupon.toLowerCase() === offerCode) {
            applyDiscount();
            setCoupon('')
        }else {
            window.alert("not a valid code");
            setCoupon('')
        }
    }
    //
  return (
    <Flex>
    <Input placeholder='Got a coupon code? Enter here.' value={coupon} type={"text"} onChange={(e) => setCoupon(e.target.value)} />
    <Button onClick={onClick} >Add</Button>
    </Flex>
  )
}

export default Discount
