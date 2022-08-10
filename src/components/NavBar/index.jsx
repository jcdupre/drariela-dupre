import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './navBar.css';


export const NavBar =() => {
    return (
<div classname="container">
<nav classname="nav">
    <div classname="nav_brand">
        <NavLink classname="nav_link" to='/'>Doctora Ari</NavLink>
    </div>
    <ul classname="nav_list">
        <li>
            <NavLink classname="nav_link" to='cart'><CartWidget /></NavLink>
        </li>
        <li>
            <NavLink classname="nav_link" to='/categoria/atenciongrupal'>Atención grupal</NavLink>
        </li>
        <li>
            <NavLink classname="nav_link" to='/categoria/atencionindividual'>Atención individual</NavLink>
        </li>
        
        
    </ul>
</nav>
</div>
    )
}

export default NavBar;
