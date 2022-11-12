import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AppContextProvider from './allApi/AppContex';

function App() {
  return (
    <div className="App">
          <AppContextProvider>
<HomePage />
</AppContextProvider>
      
    </div>
  );
}

export default App;
