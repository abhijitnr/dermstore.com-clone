import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AppContextProvider from './allApi/AppContex';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
      </AppContextProvider>

    </div>
  );
}

export default App;
