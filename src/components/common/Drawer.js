import React from 'react';
import draw from '../../assets/styles/sidemenu/Drawer.module.css';
import Accordion from '.././common/Accordion.js';
import Socialfollow from '.././common/Socialfollow.js';
import { sidebarMenu } from '../../utils/constants/constant-data';
import {MdOutlineClose} from "react-icons/md";



export default function Drawer(props) {
    const drawerClose=()=> {
        props.state((state)=>{
           return false                 // or return !state
        })
    }
    return (
        <>
        <div className={draw.drawerBackground}>
            <div className={draw.drawer}>
            <div className={draw.drawerClose}>
                <MdOutlineClose className={draw.hamburgerMenuClose} onClick={drawerClose}/>
            </div>
            <div className={draw.accordion}>
                <ul className={draw.accordionMenu}>
                {sidebarMenu.map(({name,icon,link,children })=>{         
                    return (<Accordion title={name} icon={icon} link={link} hambgClose={drawerClose} children={children}/>);
                })}
                </ul>
            </div>
                <Socialfollow />
            </div>

        </div>
        </>
    )
}
