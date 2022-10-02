
import React, { useState } from 'react';
import cart from '../../../../../assets/styles/cart/Cart.module.css';
import { BsCartX } from 'react-icons/bs';
import {FaArrowCircleRight} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import '../../../../../assets/styles/product/Productcard.css';
import MiniCard from '../../widgets/MiniCard';

function Cart(props) {
  const [message, setMessage] = useState('Cart is empty');
  const [shopBtn, setShopBtn] = useState('Start Shopping');
  const [basket, setBasket] = useState();

  const cartClose=props.cartClose;
  const cartSliceProducts = useSelector((state) => {
    return state.cartSlice.products;
  })
  const products=useSelector((state)=>{
    return state.cartSlice.products;
  })
  const totalAmt=useSelector((state)=>{
    return state.cartSlice.totalAmount;
  })

  const totalProd = cartSliceProducts.length;
  
  const EmptyCart = () => {
    return (
      <div className={cart.basket}>
        <BsCartX className={cart.cartWatermark}/> 
        <div className={cart.basketInfo}>
          <h4>{message}</h4>
        </div>
        <div className={cart.basketBtnContainer}>
          <NavLink to={props.user==null||undefined? '/signin' : '/products'} role='button' className={cart.basketBtn} onClick={cartClose}>
            {shopBtn}
          </NavLink>
        </div>
      </div>
    )
  }
  
  const LoadCart = () => {
    return (
      <>
        <div className={cart.basket}>
          <div className={cart.totalItem}>
            <span className='mr-2'>Total items</span>
            <span>{totalProd}</span>
          </div>
          <div>
          {
            cartSliceProducts.map((item) => {
              return (
                <MiniCard
                  index={nanoid()}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                />
              )
            })
          }
          </div>
          
          <div className={`${cart.checkoutContainer} `}>
            <div className={`${cart.checkout} d-flex-ai-center justify-content-between `}>
              <div>
                Items {products.length}
              </div>
              <div className=''>
                Total &#8377;{totalAmt}
              </div>
              <div className=''>
               <NavLink to={props.user==null||undefined? '/signin' : '/checkout'} role='button'>
                    <button className={cart.checkoutBtn} onClick={cartClose}>
                      Proceed
                      <FaArrowCircleRight className={cart.checkoutArrow} />
                    </button>
                  </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {cartSliceProducts == 0 ? <EmptyCart /> : <LoadCart />}
    </>
  )
}


export default Cart;
