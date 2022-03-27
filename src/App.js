import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/Login" element={<Login/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
