import { useEffect, useState } from 'react';
import { BsHeart,BsHeartFill,BsStarFill,BsStar } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { useDispatch,useSelector } from 'react-redux';
import { addCart,removeCart,addQtyandTotalPrice} from '../../../../../lib/reducer/cart/cart-slice';
import { addWishlist,removeWish } from '../../../../../lib/reducer/wishlist/wishlist-slice';
import { addSize } from '../../../../../lib/reducer/filter/filter-slice';
import '../../../../../assets/styles/product/Productcard.css';
import { nanoid } from 'nanoid';


const ProductCard = ({ item }) => {
    const dispatcher=useDispatch();
    const sizeList=[]
    const [selectedSize,setSelectedSize]=useState([]);
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
    const selectSize=(e,id)=>{
       const selected= selectedSize.map(size=>size.value==e.target.value?{...size,selected:true}:{...size,selected:false});
       setSelectedSize(selected);
       dispatcher(addSize({size:e.target.value,index:id}))
    }

    const cartProducts=useSelector(state=>state.cartSlice.products)
    const wishlistProducts=useSelector(state=>state.wishlistSlice.products)

    useEffect(()=>{
        if(item.sizes){
        let sizelist=[];
            item.sizes.map((item,index)=>{
                return sizeList.push({
                    label:item,
                    value:item,
                    id:index,
                    selected:index==0?true:false
                });
                });
            setSelectedSize(sizeList);
        }        
        return ()=>{}
    },[])


    return (
        <div key={item.id} className="card col-lg-3 col-md-4 col-sm-6 border-light">
            <div className='img-container'>
                <div className='card-img'>
                    <img src={item.images[0]} className="product-image" alt={item.title} loading='lazy'/>
                </div>
            </div>
            <div className="card-body">
                <p className="card-title" title={item.title}>{item.title}</p>
                <p className="card-text font-weight-bold">
                    <span className='fs-2 mr-2'>&#8377;{item.price}</span>
                    {item.prevprice > 0 ? <del className='text-danger' style={{textDecoration:'line-through'}}>&#8377;{item.prevprice}</del> : ''}
                    {item.sizes&&<select className='ml-3' onChange={(e)=>selectSize(e,item.id)}>
                    {selectedSize.map((size)=><option value={size.value} key={nanoid()} selected={size.selected}>{size.label}</option>)}
                    </select>}
                </p>
                
               <div className='rating-section d-flex-ai-center'>
                    <div className='prod-rating d-flex-jc-center-ai-center'>{item.rating.rate}</div> 
                    {[...Array(5)].map((_,i)=>{
                        return (
                            <>
                            {
                            i+1<=Math.trunc(item.rating.rate) ?
                                <BsStarFill className='star rating-star' key={i}/> 
                                :
                                <BsStar className='star' key={i}/>}
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
                            Remove <BiTrash />
                        </button>
                        :
                        <button className='card-btn addtocart' onClick={()=>addToCart(item)}>
                            Add <BsCart2 />
                        </button>
                    }
                    {wishlistProducts.some(x=>x.id==item.id) ? heartFill : heartOutline}
                </div>
            </div>
        </div>
    )
}

export default ProductCard