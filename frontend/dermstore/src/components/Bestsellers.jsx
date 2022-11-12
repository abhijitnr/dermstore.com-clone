import React from 'react'
import Carousel from './sider/Carousel'
import Carousel2 from './sider/Carousel2'
import SiderTwocard from './sider/SiderTwocard'

const Bestsellers = ({data}) => {
  const sider={
    img: {width:'90%',marginLeft:'10px'},
    btn:{
     backgroundColor: "black",
 border: "none",
 color: "white",
 padding: "10px 20px",
 textAlign: "center",
 textDecoration: "none",
 display: "inline-block",
 fontSize: "14px",
 width:"200px",
 margin: "4px 2px",
 cursor: "pointer",
    },
    para:{
     textAlign:'center',fontSize:'14px',marginLeft:'40px',marginRight:'-70px'
    }
 }

  return (
    <div >
    <Carousel2
        show={4}
        infiniteLoop
    >
        {/* <SiderTwocard
        img="https://static.thcdn.com/images/small/webp//productimg/original/13985788-8294996958046114.jpg"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        />
        <SiderTwocard
        img="https://a.cdnsbn.com/images/products/04149574301.jpg"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        />
        <SiderTwocard
        img="https://a.cdnsbn.com/images/products/04013583101.jpg"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        />
<SiderTwocard
        img="https://a.cdnsbn.com/images/products/02499174901.jpg"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        />
<SiderTwocard
        img="https://a.cdnsbn.com/images/products/04004229201.jpg"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        />

<SiderTwocard
        img="https://a.cdnsbn.com/images/products/21234966801.jpg"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        />
        <SiderTwocard
        img="https://assets.vogue.com/photos/619eb282a3979086398e8b59/1:1/w_2667,h_2667,c_limit/slide_14.jpg"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        /> */}
{/* <SiderTwocard
        img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586966591-20567.jpg?crop=1xw:1xh;center,top&resize=480:*"
        style={sider.img}
        text={"EltaMD UV Luminous Broad"}
        btn={'Quick Buy'}
        styleBtn={sider.btn}
        /> */}
        {data.map((image, index) => (
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
        ))}
    </Carousel2>
</div>
  )
}

export default Bestsellers