import React, { useState } from 'react';
import draw from '../../assets/styles/sidemenu/Drawer.module.css';
import {NavLink} from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';


export default function Accordion({title, icon,link,hambgClose,children}) {

    const [subMenu,setSubMenu]=useState(false);
    const activeLink={
        color:'var(--fadelight)',
        backgroundColor:'var(--navgreendrk)'
    }

    const toggleMenu=()=>{
        setSubMenu(!subMenu);
        console.log('clll')
    }

    return(
        children?<li className={draw.accordionList}>
            <p className={`mb-0 d-flex justify-content-between ${draw.accordionItem}`} onClick={toggleMenu}> 
            <span>{icon}{title} </span>
            {subMenu?<MdKeyboardArrowUp className='float-end'/>
            :
            <MdKeyboardArrowDown className='float-end'/>}
            </p>
           { subMenu&&<ul className={`${draw.accordionSubMenu} my-1`}>
                {children.map(({label,link})=><li className={draw.accordionSubMenuList}>
                    <NavLink className={draw.subMenuLink} onClick={hambgClose} to={link}>{label}</NavLink>
                </li>)}
            </ul>}
        </li>
        :
        <li className={draw.accordionList}>
            <NavLink 
            to={link} 
            className={draw.accordionLink} 
            style={({ isActive }) => isActive ? activeLink : null }
            onClick={hambgClose}
            > 
            <span>{icon}{title} </span>
            </NavLink>
        </li>
    )
    
}
