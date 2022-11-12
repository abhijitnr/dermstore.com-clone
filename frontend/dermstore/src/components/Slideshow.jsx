import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import Carousel from '../Carousel/Carousel';
// import Sidebox from './Sidebox';
import "../css/style.css"
import SideBox from './SideBox';

const slideImages = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/12/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02-HomePage_1920x700-094812.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/15/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02A-HomePage_1920x700-020215.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V1-1920x700-082409.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif",
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-09-HomePage_1920x700-021350.jpg",
];
const color = {
  color: "white",
  fontFamily: 'serif',
  fontWeight: 500,
  fontSize: '2.5rem',

}
const color2 = {
  color: "black",
  fontFamily: 'serif',
  fontWeight: 500,
  fontSize: '2.5rem',

}
const btn1 = {
  backgroundColor: "white",
  border: "none",
  color: "black",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "13px",
  margin: "4px 2px",
  cursor: "pointer",
}
const btn2 = {
  backgroundColor: "black",
  border: "none",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "13px",
  margin: "4px 2px",
  cursor: "pointer",
}
const heading =
{
  color: 'white'
  , fontWeight: 600
}

const heading2 =
{
  color: 'black'
  , fontWeight: 600
}

const Slideshow = ({ data }) => {
  return (
    <div style={{ zIndex: "0" }}>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            <SideBox h1={"For Your Very Nice \nList"} p1={
              "Go ahead & splurge:Treate them everything on their list \nwith more time to pay.checkout with klara & \nafterPay with advantage of four interst free \npayment"
            } buttonText={"SHOP NOW"} style={color} style2={btn1} style3={heading} />
          </div>
        </div>
        <div style={{ zIndex: "0" }} className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            <SideBox h1={"For Your Very Nice \nList"} p1={
              "Go ahead & splurge:Treate them everything on their list \nwith more time to pay.checkout with klara & \nafterPay with advantage of four interst free \npayment"
            } buttonText={"SHOP NOW"} style={color} style2={btn1} style3={heading} />
          </div>
        </div>
        <div style={{ zIndex: "0" }} className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <SideBox h1={"For Your Very Nice \nList"} p1={
              "Go ahead & splurge:Treate them everything on their list \nwith more time to pay.checkout with klara & \nafterPay with advantage of four interst free \npayment"
            } buttonText={"SHOP NOW"} style={color2} style2={btn2} style3={heading2} />

          </div>

        </div>
        <div style={{ zIndex: "0" }} className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
            <SideBox h1={"For Your Very Nice \nList"} p1={
              "Go ahead & splurge:Treate them everything on their list \nwith more time to pay.checkout with klara & \nafterPay with advantage of four interst free \npayment"
            } buttonText={"SHOP NOW"} style={color2} style2={btn2} style3={heading2} />

          </div>

        </div>
        <div style={{ zIndex: "0" }} className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
            <SideBox h1={"For Your Very Nice \nList"} p1={
              "Go ahead & splurge:Treate them everything on their list \nwith more time to pay.checkout with klara & \nafterPay with advantage of four interst free \npayment"
            } buttonText={"SHOP NOW"} style={color} style2={btn1} style3={heading} />

          </div>

        </div>
        {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              
            </div>
            
          </div> */}

      </Slide>
    </div>
  )
};

export default Slideshow;