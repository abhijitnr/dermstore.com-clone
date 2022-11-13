import React, { useState } from "react"
import axios from 'axios'
export const AuthContext = React.createContext();

let url = `https://wild-polo-shirt-calf.cyclic.app/products/`
url = `http://localhost:3000/products`

function AppContextProvider({ children }) {
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);

  const getAPI2 = async () => {

    
  }
  const getAPI3 = async () => {


  }
  const getAPI4 = async () => {

    

  }
  const getAPI5 = async () => {

   

  }
  const getAPI6 = async () => {

   

  }

  return (
    <AuthContext.Provider value={{ getAPI4, getAPI3, getAPI2, getAPI5, data2, data3, data4, getAPI6, data6 }}>
      {children}
    </AuthContext.Provider>

  )

}
export default AppContextProvider