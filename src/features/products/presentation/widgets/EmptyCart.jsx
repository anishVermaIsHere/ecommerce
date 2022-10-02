import React,{useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsCartX } from 'react-icons/bs'
import cart from '../components/header/Cart.module.css'

const EmptyCart = () => {
  const [message, setMessage]=useState('Cart is empty');
  const [shopBtn,setShopBtn]=useState('Start Shopping');
  return (
    <div className={cart.basket}>
    <BsCartX className={cart.cartWatermark}/> 
    <div className={cart.cartInfo}>
        <span>no items here</span>
        <h4>{message}</h4>
    </div>  
    <NavLink to='/signin' role='button' className={cart.cartBtn}>{shopBtn}</NavLink>
  </div> 
  )
}

export default EmptyCart