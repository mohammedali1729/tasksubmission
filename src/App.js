import './App.css';
import Login from './Components/Login/Login';
import Mainpage from './Components/Mainpage/Mainpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="main" element ={<Mainpage />} />
          <Route path="*" element = {<login />} />
      </Routes>
    </BrowserRouter>     
    </div>
  );
}

export default App;
