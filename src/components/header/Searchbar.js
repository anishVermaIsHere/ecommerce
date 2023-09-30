import React from 'react';
import navbar from '../../assets/styles/header/Navbar.module.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';

export default function Searchbar() {
  const navigate=useNavigate();

  const searchQuery=(e)=>{
    if (e.target.value!==''){
      navigate(`/search?q=`+e.target.value.toLowerCase().trim());
    }
  }

  return (
    // <form method='get' name='ser'>
        <div className={`d-flex ${navbar.productsearchbar}`}>
            <input className={navbar.search} type="search" placeholder="Search products..." aria-label="Search bar" onKeyDown={searchQuery} />
            <button className={navbar.searchicon} type="submit">
            <AiOutlineSearch />
            </button>
        </div>
    // </form>
        
  )
}
