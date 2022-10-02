import React from 'react';
import aside from './Aside.module.css';
import {sidebarMenu} from '../../data/Ecomdata';
import { NavLink } from 'react-router-dom';

export default function Asidebar() {
  return (
    <div className={aside}>
        <ul>
          <li><NavLink to=''>Home</NavLink></li>
          <li><NavLink to=''>{menuLink.name}</NavLink>
            <ul>
              {
                sidebarMenu.sublink.map((link)=>{
                  return(
                    <li><NavLink to=''>{link}</NavLink></li>
                  )
                })
              }
            </ul>

          </li>
          <li><NavLink to=''></NavLink></li>
        </ul>
        
    </div>
  )
}
