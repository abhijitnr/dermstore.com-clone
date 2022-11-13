import React, { useState, useContext } from 'react'
import Slider1 from '../components/Slider1'
import SliderTwo from '../components/sider/SliderTwo'
import Slider0 from '../components/Slider0'
import Slideshow from '../components/Slideshow'
import "../css/style.css"
import Slider2 from '../components/Slider2'
import Bestsellers from '../components/Bestsellers'
import SiderTwocard from '../components/sider/SiderTwocard'
import FridaySale from '../components/FridaySale'
import SideBox from '../components/SideBox'
import { useEffect } from 'react'
import axios from 'axios'
import ImageGrid from '../components/ImageGrid'
import {data} from "./data"
import {data5} from "./data"
import {slideImages} from "./data"
import obj from "./db.json";


const HomePage = () => {

  //const [data6, setData6] = useState([]);
  // const { getAPI2, getAPI3, getAPI4, getAPI5, data2, data3, data4, data6, getAPI6 } = useContext(AuthContext);
  const data2 = obj.data2;
  const data3 = obj.data3;
  const data4 = obj.data4;



  return (
    <div style={{ zIndex: "-10",marginTop: "180px" }}>
      <Slideshow data={slideImages} />
      <Slider0 h2={'2x Points on EltaMD'} p1={'Rewards members earn DOUBLE on sunscreen, moisturizers & more. Plus, receive a $16 gift when you spend $75+ on the brand.'} />
      <Slider1 />
      <Slider0 h2={'Shop By Category'} p1={''} />
      <Slider2 data={data} />
      <Slider0 h2={'BestSellers'} p1={''} />

      <div className="each-slide" style={{ zIndex: "-10" }}>
        <div style={{ 'backgroundImage': `url(${slideImages[5]})` }}>
          <SideBox h1={"The Holiday Shop"} p1={
            "Go ahead & splurge:Treate them everything on their list \nwith more time to pay.checkout with klara & \nafterPay with advantage of four interst free \npayment"
          } buttonText={"SHOP NOW"} />

        </div>

      </div>


      <Bestsellers style={{ zIndex: "0" }} data={data3} />
      <Slider0 style={{ zIndex: "0" }} h2={"Get Ready for the Black Friday Sale on November 19th"} />
      <FridaySale style={{ zIndex: "0" }} data={data4} />
      <Slider0 style={{ zIndex: "0" }} h2={'Featured Brands'} />
      <Slider2 style={{ zIndex: "0" }} data={data2} />
      <Slider0 style={{ zIndex: "0" }} h2={'From The Blog'} />
      <Bestsellers data={data5} />

      <ImageGrid />
    </div>
  )
}

export default HomePage