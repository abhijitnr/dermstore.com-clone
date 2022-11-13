import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './sider/Carousel'
import Carousel2 from './sider/Carousel2'
import SiderTwocard from './sider/SiderTwocard'

const Bestsellers = ({ data }) => {

  let nv = useNavigate();

  const sider = {
    img: { width: '90%', marginLeft: '10px' },
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
      <Carousel2
        show={4}
        infiniteLoop
      >
        
        {data.map((image, index, id) => (
          <div onClick={() => nv(`preview/${image.id}`)}>
            <SiderTwocard
              className="image"
              img={image.url}
              alt=""
              btn={'Quick Buy'}
              styleBtn={sider.btn}
              style={sider.img}
              key={index}
              p={image.p1}
              text={"EltaMD UV Luminous Broad"}

            />
          </div>
        ))}
      </Carousel2>
    </div>
  )
}

export default Bestsellers