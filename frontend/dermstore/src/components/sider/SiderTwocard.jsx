import React from 'react'
import { useNavigate } from 'react-router-dom'

const SiderTwocard = ({ img, style, text, btn, styleBtn, stylePara1, para1, stylePara,id }) => {
  //console.log(style)

  const nv = useNavigate();

  return (
    <div className='card'>
      <div style={{ padding: 8, }}>
        <img src={img} alt="placeholder" style={style} />
        <p style={stylePara1}>{para1}</p>
        <p style={stylePara}>{text}</p>
        <h3 >$ {(10+Math.random()*30).toFixed(2)}</h3>
        <button onClick={() => nv(`/cart/${id}`)} style={styleBtn}>{btn}</button>
      </div>
    </div>)
}

export default SiderTwocard