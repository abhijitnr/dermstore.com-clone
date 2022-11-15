import AppContextProvider from "./allApi/AppContex";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div id="app">
      <AppContextProvider>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
        <Footer></Footer>
      </AppContextProvider>
    </div>
  );
}

export default App;
