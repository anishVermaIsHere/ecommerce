import React from 'react'
import { useSelector } from 'react-redux';
import navbar from '../../../../assets/styles/header/Navbar.module.css';

const WishlistTotal = () => {
  const wishCount=useSelector((state)=>{
    return state.wishlistSlice.totalWishlist;
  })
  
  return wishCount!=0?
    <div className={navbar.badge}>
          <small className='d-flex-jc-center-ai-center'><b> {wishCount} </b></small>
    </div>
  : ""
}

export default WishlistTotal