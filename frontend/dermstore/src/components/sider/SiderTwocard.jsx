import React from 'react'

const SiderTwocard = ({img,style,text,btn,styleBtn,stylePara1,para1,stylePara}) => {
  //console.log(style)
  return (
    <div className='card'>
    <div style={{padding: 8,}}>
    <img  src={img} alt="placeholder" style={style} />
    <p style={stylePara1}>{para1}</p>
    <p style={stylePara}>{text}</p>
    <h3 >$ 56</h3>
    <button style={styleBtn}>{btn}</button>
    </div>
</div>  )
}

export default SiderTwocard