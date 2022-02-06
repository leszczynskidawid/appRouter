import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage"
import ProductsPage from "../pages/ProductsPage"
import ContactPage from "../pages/ContactPage"

const Page =()=> {
    return (
        <>
       <Routes>
        <Route path ="/" element = {<MainPage/>} />
        <Route path ="/products" element = {<ProductsPage/>} />
        <Route path ="/contact" element = {<ContactPage/>} />
        <Route path ="/admin" element = {<AdminPage/>} />
        <Route path ="*" element = {<MainPage/>} />
        
        
        </Routes>
        </>
      );
}

export default Page; 