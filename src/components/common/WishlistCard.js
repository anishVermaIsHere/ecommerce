import React from 'react';
import { BiTrash } from 'react-icons/bi';
import '../../assets/styles/product/Productcard.css';
import '../../assets/styles/wishlist/Wishlist.css';
import { removeWish } from '../../utils/services/reducer/wishlist/wishlist-slice';
import { addCart,addQtyandTotalPrice } from '../../utils/services/reducer/cart/cart-slice';
import { useDispatch,useSelector } from 'react-redux';


const WishlistCard = (props) => {
  const item=props;
  const dispatcher=useDispatch();
  const removeWishlist = (item) => {
    dispatcher(removeWish(item));
  }
  const addToCart=(item)=>{
    dispatcher(addCart(item));
    dispatcher(addQtyandTotalPrice(item));
  }
  const cartProducts=useSelector(state=>state.cartSlice.products)

  return (
    <>
      <div key={item.key} className='row row-content text-center'>
        <div className='col-2 col-xs-1 img-col'>
          <div className='product-cover'>
            <img src={item.image} alt={item.title} />
          </div>
        </div>
        <div className='col-3 col-xs-2 title-col'>{item.title}</div>
        <div className='col-2 col-xs-1'>&#8377;{item.price}</div>
        <div className='col-2 col-xs-4 stock'>
          {item.stock === 'In stock' ?
            <p id='instock'>In stock</p> :
            <p id='outstock'>Out of stock</p>
          }
        </div>
        <div className='col-2 col-xs-5 action-col'>
          {item.stock === 'Out of stock' ?
              <button className='action addtocart disabled' title='Add to Cart'>
                Add to cart
              </button>
              :
            cartProducts.some(x=>x.id===item.id)?
              ""
              :
              <button className='action addtocart' title='Add to Cart' onClick={()=>addToCart(item)}>
                Add to cart
              </button>
          }
          <BiTrash className='removewish' onClick={()=>removeWishlist(item)} />
        </div>
      </div>
    </>
  )
}

export default WishlistCard