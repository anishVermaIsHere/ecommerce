import React, {useState, useEffect} from 'react';
import {Nav} from './Nav.js';
import NavMain from './NavMain.js';

const Header = (props) => {  
  return (
    <header className='position-sticky w-100' style={{zIndex:'99', top:'0'}}>
        <Nav user={props.user} signOutUser={props.signOutUser}/>
        <NavMain />
    </header>
  )
}

export default Header