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
import { AuthContext } from '../allApi/AppContex'
import ImageGrid from '../components/ImageGrid'



const HomePage = () => {

  //const [data6, setData6] = useState([]);
  const { getAPI2, getAPI3, getAPI4, getAPI5, data2, data3, data4, data6, getAPI6 } = useContext(AuthContext);


  const data = [
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png',
      p1: 'p'
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2833%29-085536.png',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/32/DS_Round_Nav_-_Untitled_Page_%289%29-052632.png',
      p1: ''
    }, {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/03/DS_Round_Nav_-_Untitled_Page_%2810%29-052703.png',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/49/DS_Round_Nav_-_Untitled_Page_%2813%29-053649.png',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2825%29-063536.png',
      p1: ''
    }
  ]





  const data5 = [
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/07/natura-bisse-hero-image-blog-044007.jpg',
      p1: 'p'
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/16/0818_THG0035093_DS_SEPT_SHOT_27_031_%281%29-101016.jpg',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/27/fragrance_blog_%281%29-075627.jpg',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/13/Augustinus-Bader_1659128996-848x672-013513.jpg',
      p1: 'p'
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/38/skin_timeline_%281%29-051238.jpg',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/31/skinceutical-vitamin-c-082631.jpg',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/12/how_to_pick_eltamd_sunscreen-091512.jpg',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/07/natura-bisse-hero-image-blog-044007.jpg',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/30/webimage-E9B1D072-B3F0-4E6E-808214934AB6851F-042830.png',
      p1: ''
    },
    {
      url: 'https://static.thcdn.com/images/small/webp/widgets/208-us/17/conscious-beauty-blog-081917.png',
      p1: ''
    }
  ]
  const slideImages = [
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/12/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02-HomePage_1920x700-094812.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/15/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02A-HomePage_1920x700-020215.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V1-1920x700-082409.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-09-HomePage_1920x700-021350.jpg",
    'https://static.thcdn.com/images/large/webp/widgets/208-us/26/original-Holiday_Shop_Disrupter_%28long%29-045226.png'
  ];


  useEffect(() => {
    getAPI2()
    getAPI3()
    getAPI4()
    //getAPI5()
    getAPI6()


  }, [])

  console.log(data3);

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