import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
// import { Cart } from "./pages/cart_section/Cart";
// import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div>
      {/* <ChakraProvider>
        <Cart />
      </ChakraProvider> */}
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
