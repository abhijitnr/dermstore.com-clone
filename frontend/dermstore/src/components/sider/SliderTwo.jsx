import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from './Carousel';
//import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import SiderTwocard from './SiderTwocard';
import { Link, NavLink } from 'react-router-dom';

const SliderTwo = ({ data }) => {



  const getAPI = async () => {

    let response = await axios.get("https://wild-polo-shirt-calf.cyclic.app/products")
    let data = response.data


  }


  //getAPI()

  const sider = {
    img: { width: '150%', marginLeft: '-50px' },
    btn: {
      backgroundColor: "black",
      border: "none",
      color: "white",
      padding: "10px 20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "14px",
      width: "200px",
      margin: "4px 2px",
      cursor: "pointer",
    },
    para: {
      textAlign: 'center', fontSize: '14px', marginLeft: '40px', marginRight: '-70px'
    }
  }


  return (

    <div >
      <Carousel
        show={3}
        infiniteLoop
      >



        {/* <SiderTwocard
        img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586966591-20567.jpg?crop=1xw:1xh;center,top&resize=480:*"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}

        /> */}

        {data.map((image, index) => (
          <SiderTwocard
            className="image"
            img={image.url}
            alt=""
            btn={'Quick Buy'}
            styleBtn={sider.btn}
            style={sider.img}
            key = { index }
            p = { image.p1 }
            text = { "EltaMD UV Luminous Broad"}

          />
        ))}

      </Carousel>
    </div>


  )
}

export default SliderTwo