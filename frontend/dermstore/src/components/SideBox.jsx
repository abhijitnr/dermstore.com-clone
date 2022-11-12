import React from 'react'
import "../css/style.css"

const SideBox = ({ h1, style, p1, buttonText, style2, style3 }) => {
  return (
    <div className='sideContainer'>
      <h1 style={style}>{h1}</h1>
      <p style={style3}>{p1}</p>
      <button style={style2}>{buttonText}</button>
    </div>
  )
}

export default SideBox