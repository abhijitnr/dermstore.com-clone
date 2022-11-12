import React from 'react'
import Category from './sider/Category'

const Slider2 = ({data}) => {
    
    
  return (
    <div className='category'>
        {/* <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/> */}


        {data.map((image, index) => (
          <Category
            className="image"
            img={image.url}
            alt=""
            key={index}
           p={image.p1}
          />
        ))}
    </div>
  )
}

export default Slider2