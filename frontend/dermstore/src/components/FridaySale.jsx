import React from 'react'
import SiderTwocard from './sider/SiderTwocard'

const FridaySale = ({data}) => {

    const sider={
        img: {width:'100%'},
        btn:{
         backgroundColor: "white",
     border: "2px solid black",
     color: "black",
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
            fontSize:'12px'
        },para1:{
            fontSize:'19px'
        }
     }

  return (
    <div className='friday'>
        {/* <SiderTwocard
        img="https://static.thcdn.com/images/small/webp/widgets/208-us/10/Rewards_%281%29-070210.png"
         style={sider.img}
         para1={'Earn 250 Points, NOW'}
         text={"Get instant points just for becoming a Rewards member. Plus, access to even more during our Black Friday Sale."}
         btn={'JOIN NOW'}
         styleBtn={sider.btn}
         stylePara1={sider.para1}
         stylePara={sider.para}

        />
        <SiderTwocard
        img="https://static.thcdn.com/images/small/webp/widgets/208-us/06/1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V3-676x556-090706.jpg"
        style={sider.img}
        text={"Download the Dermstore App to be among the first to shop The Black Friday Sale."}
        para1={'Get Ready to Save'}
        stylePara1={sider.para1}

        btn={'DOWNLOAD NOW'}
        styleBtn={sider.btn}
        stylePara={sider.para}

        />
        <SiderTwocard
        img="https://static.thcdn.com/images/small/webp/widgets/208-us/47/RAF-090647.png"
        style={sider.img}
        text={"For a limited time, earn $20 for each friend you introduce to us & they'll enjoy 15% off."}
        para1={'Give Your Friend A Free Gift'}
        stylePara1={sider.para1}

        btn={'SIGN UP'}
        styleBtn={sider.btn}
        stylePara={sider.para}

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
    </div>
  )
}

export default FridaySale