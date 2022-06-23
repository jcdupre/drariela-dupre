import React from 'react'

import cartwidget from '../cartwidget'

export const navbar =() => {
    return (
<div classname="container">
<nav classname="nav">
    <div classname="nav_brand">
        <a classname="nav_link" href="#">Mimarca</a>
    </div>
    <ul classname="nav_list">
        <li>
            <a classname="nav_link" href="#">Categoria 1</a>
        </li>
        <li>
            <a classname="nav_link" href="#">Categoria 2</a>
        </li>
        <li>
            <a classname="nav_link" href="#">cartwidget</a>
        </li>
    </ul>
</nav>
</div>
    )
}