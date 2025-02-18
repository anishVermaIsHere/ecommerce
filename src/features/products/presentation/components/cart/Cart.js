
import React from 'react';
import cart from '../../../../../assets/styles/cart/Cart.module.css';
import { BsCartX } from 'react-icons/bs';
import {FaArrowCircleRight} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import '../../../../../assets/styles/product/Productcard.css';
import CartItemCard from '../../widgets/CartItemCard';

function Cart(props) {
  const cartClose=props.cartClose;
  const authState = useSelector(state=>state.authSlice);
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
          <h4>Cart is Empty</h4>
        </div>
        <div className={cart.basketBtnContainer}>
          <NavLink to='/products' role='button' className={cart.basketBtn} onClick={cartClose}>
            Start Shopping
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
                <CartItemCard
                  index={nanoid()}
                  id={item.id}
                  title={item.title}
                  image={item.images[0]}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  size={item.size}
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
                  <NavLink to={!authState?.accessToken ? '/signin' : '/checkout'} role='button'>
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
