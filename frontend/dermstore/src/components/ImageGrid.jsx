//import React from 'react'



import React, { useState,useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../allApi/AppContex";
import Bestsellers from "./Bestsellers";


const ImageGrid = () => {
    const { getAPI2,getAPI3,getAPI4,getAPI5,data2,data3,data4,data6 } = useContext(AuthContext);
console.log("data",data3);
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    ground: false
  });
  const onClickHandler = (order) => {
    const resetImages = {
      first: false,
      second: false,
      ground: false
    };
    setImageClicked({
      ...resetImages,
      [order]: true
    });
  };
  
  useEffect(()=>{
    onClickHandler("ground")
  },[])
  const styleButton={
    border: 'none',
  padding: 0,
  background: 'none'
  }
  const data7 = data6.slice(7, 13);

  return (
    <div>
      <div className="Ccontainer">
        <div className="ground">
            <h3 onClick={() => onClickHandler("ground") } className="ground" style={styleButton}>New Arrivals</h3>
        </div>
        <div className="ground">
        <h3 onClick={() => onClickHandler("first") } className="ground" style={styleButton}>Gifts & Sets</h3>
        </div>
        <div className="ground">
        <h3 onClick={() => onClickHandler("second") } className="ground" style={styleButton}>DermStore Exclusive</h3>

        </div>
      </div>
      <div className="image">
        {imageClicked.ground && <Bestsellers data={data3}/>}
        {imageClicked.first &&  <Bestsellers data={data6}/>}
        {imageClicked.second &&  <Bestsellers data={data7}/>}
      </div>
    </div>
  );
};

export default ImageGrid;
