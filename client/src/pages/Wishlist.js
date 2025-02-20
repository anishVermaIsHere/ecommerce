import React from 'react';
import { BsHeart} from 'react-icons/bs';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom';
import '../assets/styles/product/Productcard.css';
import '../assets/styles/wishlist/Wishlist.css';
import Breadcrumbs from '../components/common/Breadcrumbs';
import WishlistCard from '../components/common/WishlistCard';


const Wishlist = () => {
  
  const url=useLocation();
  const products = useSelector((state)=> state.wishlistSlice.products)

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
            <Breadcrumbs link={url}/>
        </div>
        
       { products.length==0? 
       <div className='wishlist-heading empty-wish-container d-flex-jc-center-ai-center col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mb-5'>
        <BsHeart className='wishlistIcon mb-2' />
        <h2 id='empty-wishlist'> Wishlist is Empty</h2>
      </div>
       :
       <>
       <div className='wishlist-heading col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex-jc-center-ai-center mb-5'>
          <BsHeart className='wishlistIcon' />
          <h2 id='h2-wishlist'>Wishlist</h2>
        </div>
       <section className='col-lg-12 col-md-12  col-sm-12 col-xs-12 wishlist-container mb-5'>
          <div id='wishlist-head-wrapper' className='text-right'> 
            <h5>Total items {products.length}</h5>
              <div className="row row-head text-center ">
                <div className='col-5 col-xs-2'>Product</div>
                <div className="col-2 col-xs-1">Price</div>
                <div className="col-2 col-xs-4">Status</div>
                <div className="col-3 col-xs-5">Action</div>
              </div>
          </div>
          <div className='wishlist-card-container'>
          {products.map((item, index=nanoid()) => {
            return (
              <WishlistCard key={index} item={item} />
            )})
          }
          </div>
         
        </section>
        </>}
      </div>
    </div>
  )
}

export default Wishlist