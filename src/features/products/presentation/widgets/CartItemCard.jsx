import React from 'react';
import { useDispatch } from 'react-redux';
import {removeCart,incrementQty,decrementQty } from '../../../../utils/services/reducer/cart/cart-slice';
import cart from '../../../../assets/styles/cart/Cart.module.css';
import { BiTrash } from 'react-icons/bi';



const CartItemCard = ({index,title,id,image,price,size,quantity,totalPrice}) => {
  let uniqueKey=index;
  const dispatcher=useDispatch();
  const item={id,title,image,price,quantity,totalPrice};
  const removeFromCart=(item)=>{
    dispatcher(removeCart(item));
  }
  const quantityPlus=(item)=>{
    dispatcher(incrementQty(item))
  }
  const quantityMinus=(item)=>{
    dispatcher(decrementQty(item))
  }
const subTotalAmount=totalPrice;
  return(
    <>
      <div className='d-flex justify-content-start align-items-center mb-2 w-100' style={{border: '1px solid #dee2e6'}} key={uniqueKey}>
          <div className={cart.itemMiniImg}>
            <img src={image} alt={title} />
          </div>
          <div className={cart.itemMiniContainer}>
              <div>
                <span>{title}</span> <br/>
                {size&&<span>Size: {size}</span>}
              </div>
              <span className={cart.price}>&#8377;{price}</span>
              <span className={cart.subTotal}>&#8377;{subTotalAmount}</span>
              <div className={`${cart.itemQty} d-flex-ai-center justify-content-between`}>
                <div className='cart-btn d-flex-jc-center-ai-center' style={{width:'40%'}}>
                  <span className='cartqty minus' onClick={()=>quantityMinus(item)}>-</span>
                  <span className='qty'>{quantity}</span>
                  <span className='cartqty plus' onClick={()=>quantityPlus(item)}>+</span>
                </div>

                <BiTrash className={cart.removeItem} onClick={()=>{removeFromCart(item)}}/>
              </div>
          </div>
      </div>
    </>
  )
}

export default CartItemCard