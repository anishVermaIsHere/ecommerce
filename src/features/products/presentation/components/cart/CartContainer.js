
import {BsCartX,BsEmojiNeutral} from 'react-icons/bs';
import React,{useState,useEffect} from 'react';
import {MdOutlineClose} from "react-icons/md";
import {FaArrowCircleRight} from 'react-icons/fa';
import cart from '../../../../../assets/styles/cart/Cart.module.css';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import { useSelector,useDispatch } from 'react-redux';
import {calcTotal} from '../../../../../utils/services/reducer/cart/cart-slice';

const styleContainer={
display:'block',
backgroundColor:'var(--blur)',
position:'fixed',
top:'0',
bottom:'0',
right:'0',
zIndex:'100',
width:'100%',
height:'100%',
transition:'0.5s all'
}
const styleCart= {
  backgroundImage: 'linear-gradient(to right,#ffffff, #f2f2f2)',
  position:'absolute',
  top:'0',
  bottom:'0',
  right:'0',
  boxShadow: '-3px 0 0 0 rgb(0 0 0 / 5%)',
  borderLeft: '1px solid #e1e1e1',
  overflow:'auto',
  width:'360px'
}

function CartContainer(props){

  const cartClose=()=>{
    props.val((data)=>{
      return !data
    })
  }
  const cartSlice=useSelector((state)=>state.cartSlice);
  const dispatcher=useDispatch()
 

  useEffect(() => {
    dispatcher(calcTotal());
  }, [cartSlice, dispatcher]);

  
  
return(
  <>
  <div style={styleContainer}>
    <div style={styleCart}>
      <div className={cart.cartHeading}>
        <MdOutlineClose className={cart.cartClose} onClick={cartClose}/>
        <span className={cart.cartTitle}>Shopping Cart</span>
      </div>
     <Cart cartClose={cartClose} user={props.user} />
     {/* <div className={`${cart.checkoutContainer} `}>
        <div className={`${cart.checkout} d-flex-ai-center justify-content-between `}>
            <div>
            Items {products.length}
            </div>
          <div className=''>
            Total &#8377;{totalAmt}
          </div>
          <div className=''>
            <NavLink to='/checkout' role='button'>
              <button className={cart.checkoutBtn} onClick={cartClose}>
                Proceed
              <FaArrowCircleRight className={cart.checkoutArrow}/>
              </button>
            </NavLink>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  </>
) 
}

export default CartContainer;