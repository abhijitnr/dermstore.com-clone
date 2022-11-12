import React, { useState } from "react"
import axios from 'axios'
export const AuthContext = React.createContext();

function AppContextProvider({ children }) {
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);

  const getAPI2 = async () => {

    let response = await axios.get("https://wild-polo-shirt-calf.cyclic.app/products/data2")
    let data = response.data
    //console.log(data)
    setData2(data)
    //return data
  }
  const getAPI3 = async () => {

    let response = await axios.get("https://wild-polo-shirt-calf.cyclic.app/products/data3")
    let data = response.data
    //console.log(data)
    setData3(data)

  }
  const getAPI4 = async () => {

    let response = await axios.get("https://wild-polo-shirt-calf.cyclic.app/products/data4")
    let data = response.data
    //console.log(data)
    setData4(data)

  }
  const getAPI5 = async () => {

    let response = await axios.get("https://wild-polo-shirt-calf.cyclic.app/products/data5")
    let data = response.data
    //console.log(data)
    setData5(data)

  }
  const getAPI6 = async () => {

    let response = await axios.get("https://wild-polo-shirt-calf.cyclic.app/products/data6")
    let data = response.data
    //console.log(data)
    setData6(data)

  }

  return (
    <AuthContext.Provider value={{ getAPI4, getAPI3, getAPI2, getAPI5, data2, data3, data4, getAPI6, data6 }}>
      {children}
    </AuthContext.Provider>

  )

}
export default AppContextProvider