import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function Discount() {
    const [coupon, setCoupon] = useState('')
    const onClick = () => {
        const offerCode = "bikram123";
        if(coupon.toLowerCase() === offerCode) {
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
