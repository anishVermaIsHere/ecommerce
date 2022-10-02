import React from 'react';
import { NavLink } from 'react-router-dom';
import brd from '../../assets/styles/common/Brdcrb.module.css';
import {nanoid} from 'nanoid';

export default function Breadcrumbs(props) {
  const {link}=props;
  const pathName=link.pathname;
  let linkArray=pathName.split('/');
  linkArray=linkArray.slice(1);


  return (
    <>
      <div className={`${brd.navigator} mb-3`} aria-label="breadcrumb">
        <ol className={`breadcrumb ${brd.brdcrmb}`}>
          <li className={`breadcrumb-item ${brd.active}`} key='001'>
            <NavLink to="/">Home</NavLink>
          </li>
          {
            linkArray.map(link=>{
              return(
                linkArray[linkArray.length-1] == link? 
                <li className='breadcrumb-item' key={nanoid()}>
                  <span style={{textTransform:'capitalize', fontSize:'0.8rem'}}>{link}</span>
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
          {/* <li className="breadcrumb-item" key='002'><NavLink to="/">Library</NavLink></li>
          <li className="breadcrumb-item" key='003'><NavLink to="/" aria-current="page">Data</NavLink></li> */}
        </ol>
      </div>
    </>
  )
}
