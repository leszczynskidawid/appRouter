import React from "react";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import pots1 from "../images/img4.jpg"
import post2 from "../images/pots2.jpg"
 import "../styles/Header.css"
import { Route, Router, Routes } from "react-router-dom";



const Header =()=> {
    return (
  <>
  <Routes> 
      <Route path="/" element = {<img src={img1} alt="dupa Oli" />}/>
      <Route path="/products" element = {<img src={img2} alt="dupa Oli" />}/>
      <Route path="/contact" element = {<img src={pots1} alt="dupa Oli" />}/>
      <Route path="/admin" element = {<img src={img3} alt="dupa Oli" />}/>

      <Route path="*" element = {<img src={post2} alt="dupa Oli" />}/>

   

  </Routes>
    
    </>
      );
}

export default Header;