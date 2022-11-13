import React from 'react'
import { useNavigate } from 'react-router-dom'
import Category from './sider/Category'

const Slider2 = ({ data }) => {

  const nv = useNavigate();

  return (
    <div className='category'>
      {/* <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/>
        <Category img={'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'} p={'SkinCare'}/> */}


      {data.map((image, index) => (
        <div onClick={()=>nv("/preview/"+image.id)}>
          <Category
            className="image"
            img={image.url}
            alt=""
            key={index}
            p={image.p1}
          />
        </div>
      ))}
    </div>
  )
}

export default Slider2