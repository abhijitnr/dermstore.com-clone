import React from 'react'

const Category = ({img,p1}) => {
  return (
    <div>
        <img src={img} alt="" width="80%"/>
        <p>{p1}</p>
    </div>
  )
}

export default Category