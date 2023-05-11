// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";

import TextForm from './components/TextForm';
import About from './components/Aboutus';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <Navbar title="textutils" ClassName="nav"></Navbar>
      
            <Routes>
              <Route exact path="/" element={<TextForm/>}/>
              <Route exact path="/about" element={<About/>}/>
            </Routes>
 
    </BrowserRouter>
     
  
    </>
  );
}

export default App;
