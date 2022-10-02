import React,{useState} from 'react';
import { BsCart2,BsHeart,BsHeartFill,BsStarFill,BsStar,BsStarHalf } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { useDispatch,useSelector } from 'react-redux';
import { addCart,removeCart,addQtyandTotalPrice} from '../../../../../utils/services/reducer/cart/cart-slice';
import { addWishlist,removeWish } from '../../../../../utils/services/reducer/wishlist/wishlist-slice';
import '../../../../../assets/styles/product/Productcard.css';


const ProductCard = ({item}) => {

const dispatcher=useDispatch();

const addToWishlist=()=> {
    setWishlist((wishlist)=>!wishlist)
    dispatcher(addWishlist(item));
}
const removeWishlist=()=>{
    setWishlist((wishlist)=>!wishlist)
    dispatcher(removeWish(item));
}
const heartOutline=<BsHeart className='wishlist addtowish-ol' onClick={addToWishlist} title='Add to Wishlist'/>;
const heartFill=<BsHeartFill className='wishlist addtowish-fl' onClick={removeWishlist} title='Add to Wishlist'/>;
const [wishlist,setWishlist]=useState(heartOutline);

const addToCart=(item)=>{
    dispatcher(addCart(item));
    dispatcher(addQtyandTotalPrice(item));
}
const removeFromCart=(item)=>{
    dispatcher(removeCart(item));
}

const cartProducts=useSelector(state=>state.cartSlice.products)
const wishlistProducts=useSelector(state=>state.wishlistSlice.products)


    return (
        <div key={item.key} 
        className="card col-lg-3 col-md-4 col-sm-4 border-light">
            <div className='img-container'>
                <div className='card-img'>
                    <img src={item.image} className="product-image" alt={item.title}/>
                </div>
            </div>
            <div className="card-body">
                <p className="card-title" title={item.title}>{item.title}</p>
                <p className="card-text">&#8377;{item.price}</p>
               <div className='rating-section d-flex-ai-center'>
                    <div className='prod-rating d-flex-jc-center-ai-center'>{item.rating.rate}</div> 
                    {[...Array(5)].map((_,i)=>{
                        return (
                            <>
                            {
                            i+1<=Math.trunc(item.rating.rate) ?
                                <BsStarFill className='star rating-star'/> 
                                :
                                <BsStar className='star'/>}
                            </>
                        )
                    })
                    }
                    


                    <span style={{fontSize:'0.7rem', marginLeft:'3px'}}>{`(${item.rating.count})`}</span>
                </div>
                <div className='card-action mt-auto d-flex-ai-center'>
                    {item.stock === 'Out of stock' ?
                        <button className='card-btn outofstock disabled'>
                            Out of Stock
                        </button>
                        :
                    cartProducts.some(x=>x.id===item.id)?
                        <button className='card-btn removefromcart' onClick={()=>removeFromCart(item)}>
                            <BiTrash />
                        </button>
                        :
                        <button className='card-btn addtocart' onClick={()=>addToCart(item)}>
                            Add to Cart 
                        </button>
                    }
                    {wishlistProducts.some(x=>x.id==item.id) ? heartFill : heartOutline}
                </div>
            </div>
        </div>
    )
}

export default ProductCard