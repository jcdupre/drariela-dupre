import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';

export const NavBar =() => {
    return (
<div classname="container">
<nav classname="nav">
    <div classname="nav_brand">
        <NavLink classname="nav_link" to='/'>Mimarca</NavLink>
    </div>
    <ul classname="nav_list">
        <li>
            <NavLink classname="nav_link" to='/categoria/servicios'>Servicios</NavLink>
        </li>
        <li>
            <NavLink classname="nav_link" to='/categoria/consejos'>Consejos</NavLink>
        </li>
        <li>
            <NavLink classname="nav_link" to='cart'>CartWidget</NavLink>
        </li>
    </ul>
</nav>
</div>
    )
}

export default NavBar;
