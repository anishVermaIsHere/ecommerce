import React from 'react';
import draw from '../../assets/styles/sidemenu/Drawer.module.css';
import {NavLink} from 'react-router-dom';


export default function Accordion({title, icon,link,hambgClose}) {
    const activeLink={
        color:'var(--fadelight)',
        backgroundColor:'var(--navgreendrk)'
    }

    return(
        <li className={draw.accordionList}>
        <NavLink 
        to={link} 
        className={draw.accordionLink} 
        style={({ isActive }) => isActive ? activeLink : null }
        onClick={hambgClose}
        > 
        {icon}{title} 
        </NavLink>
        </li>
    )
    
}
