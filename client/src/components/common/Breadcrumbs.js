import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import brd from '../../assets/styles/common/Brdcrb.module.css';
import {nanoid} from 'nanoid';

const Breadcrumbs=({link})=>{
  const [navLink,setNavLink]=useState([]);

  useEffect(()=>{
    const path=link.pathname.split('/');
   const updatedPath= path.map((p)=>p.replace('%20',' '));
      // const string=substring.replace(/\w\S*/g, function(str){return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();});
   setNavLink(updatedPath.slice(1));
    return ()=>{}
  },[link])


  return (
    <>
      <div className={`${brd.navigator} mb-3`} aria-label="breadcrumb">
        <ol className={`breadcrumb ${brd.brdcrmb}`}>
          <li className={`breadcrumb-item ${brd.active}`}>
            <NavLink to="/">Home</NavLink>
          </li>
          {
            navLink.map((link,index)=>{
              return(
                navLink[navLink.length-1] == link? 
                <li className='breadcrumb-item' key={nanoid()}>
                  <span style={{textTransform:'capitalize', fontSize:'0.8rem',cursor:'default'}}>{link}</span>
                </li>
              :
              <li className={`breadcrumb-item ${brd.active}`} key={nanoid()}>
                <NavLink to={`/${link}`} style={{textTransform:'capitalize'}}>
                  {link}
                </NavLink>
              </li>
              )
            }) 
          }
        </ol>
      </div>
    </>
  )
}

export default Breadcrumbs;