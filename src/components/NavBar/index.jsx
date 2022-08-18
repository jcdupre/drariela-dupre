import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './navBar.css';


export const NavBar =() => {
    return (
<div className="container">
<nav className="nav">
    <div className="nav_brand">
        <NavLink className="nav_link" to='/'>Doctora Ari</NavLink>
    </div>
    <ul className="nav_list">
        <li>
            <NavLink className="nav_link" to='cart'><CartWidget /></NavLink>
        </li>
        <li>
            <NavLink className="nav_link" to='/categoria/atenciongrupal'>Atención grupal</NavLink>
        </li>
        <li>
            <NavLink className="nav_link" to='/categoria/atencionindividual'>Atención individual</NavLink>
        </li>
        
        
    </ul>
</nav>
</div>
    )
}

export default NavBar;
