import React from 'react';
import navbar from '../../assets/styles/header/Navbar.module.css';
import {AiOutlineSearch} from 'react-icons/ai';

export default function Searchbar() {
  return (
    <form method='get' name='ser'>
        <div className={`d-flex ${navbar.productsearchbar}`}>
            <input className={navbar.search} type="search" placeholder="Search products" aria-label="Search"/>
            <button className={navbar.searchicon} type="submit">
            <AiOutlineSearch />
            </button>
        </div>
    </form>
        
  )
}
