import React from 'react'
import { useNavigate } from 'react-router-dom'
import SiderTwocard from './sider/SiderTwocard'

const FridaySale = ({ data }) => {

  const nv = useNavigate();

  const sider = {
    img: { width: '100%' },
    btn: {
      backgroundColor: "white",
      border: "2px solid black",
      color: "black",
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
      fontSize: '12px'
    }, para1: {
      fontSize: '19px'
    }
  }

  return (
    <div className='friday'>
      
      {data.map((image, index) => (
        <div onClick={()=>nv("/review/"+image.id)}>
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
    </div>
  )
}

export default FridaySale