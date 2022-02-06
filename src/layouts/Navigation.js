import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css"

const listMenuItems = [
    {name:"start" , path:"/"},
    {name:"products" , path:"/products"},
    {name:"contact" , path:"/contact"},
    {name:" panel admin" , path:"/admin"},
]
const Navigation =()=> {

    const listMenu = listMenuItems.map(itemMenu => (
    <li key= {itemMenu.name}>{<NavLink to = {itemMenu.path}>{itemMenu.name} </NavLink>}</li>))
    return (
    <nav>
        <ul>
         {listMenu}
        </ul>
    </nav>
      );
}

export default Navigation;