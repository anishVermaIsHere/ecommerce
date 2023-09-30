import React from 'react';
import '../../assets/styles/header/Header.css';
import {NavLink} from 'react-router-dom';
import {nanoid} from 'nanoid';
import { URL_PATH} from '../../utils/constants/routesdata';


const NavMain = () => {
    const activeLink={
        borderBottom:'2px solid #fff'
    }
  return (
    <div className='nav-main d-flex justify-content-center align-items-center'>
        <ul className='menu'>
            {
                URL_PATH.map((catg)=>{
                    return(
                        <li className='menu-item' key={nanoid()}>
                        <NavLink 
                        to={catg.route} 
                        className='menu-item-link' 
                        style={({isActive})=>isActive ? activeLink : undefined}
                        >
                            {catg.title}
                        </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default NavMain