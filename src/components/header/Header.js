import React from 'react';
import {Nav} from './Nav.js';
import NavMain from './NavMain.js';

const Header = () => {  
  return (
    <header className='position-sticky w-100' style={{zIndex:'99', top:'0'}}>
        <Nav />
        <NavMain />
    </header>
  )
}

export default Header