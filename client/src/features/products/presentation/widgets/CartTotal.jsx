import React from 'react'
import navbar from '../../../../assets/styles/header/Navbar.module.css'
import { useSelector } from 'react-redux';

const CartTotal = () => {
    const cartCount=useSelector((state)=>{
      return state.cartSlice.cartVal
  })

  return cartCount!=0?
    <div className={navbar.badge}>
          <small className='d-flex-jc-center-ai-center'>
            <b> {cartCount} </b>
          </small>
    </div>
    :
    ""
}

export default CartTotal