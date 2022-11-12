import React from 'react'
//import SliderOne from './SliderOne'
import SliderTwo from './sider/SliderTwo'
//import "./css/style.css"
import SliderOne from './sider/SliderOne'

const data2=[
  {
      url:'https://static.thcdn.com/images/small/webp//productimg/original/13985788-8294996958046114.jpg',
      p1:'p'
  },
  {
      url:'https://a.cdnsbn.com/images/products/04149574301.jpg',
      p1:''
  },
  {
      url:'https://a.cdnsbn.com/images/products/04013583101.jpg',
      p1:''
  },{
      url:'https://a.cdnsbn.com/images/products/02499174901.jpg',
      p1:''
  },
  {
      url:'https://a.cdnsbn.com/images/products/04004229201.jpg',
      p1:''
  },
  {
      url:'https://a.cdnsbn.com/images/products/21234966801.jpg',
      p1:''
  }
]


const Slider1 = () => {
  return (
    <div className='slider'>
        <SliderOne/>
        <SliderTwo data={data2}/>
</div>
  )
}

export default Slider1