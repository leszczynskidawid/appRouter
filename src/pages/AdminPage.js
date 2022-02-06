import React from 'react';
import { Route ,Redirect, Routes } from 'react-router-dom';
import Login from './Login';


const perrmision = false; 
const AdminPage = (e) => {


 return (
 

    <Routes><Route element={perrmision ? <h1>Panel admiona -siema chuje</h1> : <Route path ="/login" element = {<Login/>}/> } /></Routes> 

 )  
};
export default AdminPage; 