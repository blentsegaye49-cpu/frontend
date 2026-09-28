import React from 'react';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profilesetup from './Profilesetup';
import CVUpload from './pages/Cvupload';
import MyProfile from './pages/MyProfile';
import Companies from './pages/Findcompany';
import Jobs from './pages/Job';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path='/profilesetup' element={<Profilesetup/>}/>   
       <Route path='/cv-upload' element={<CVUpload/>}/>   
       <Route path='/myprofile' element={<MyProfile/>}/>
<Route path='/companies' element={<Companies/>}/>
<Route path='/Jobs' element={<Jobs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
