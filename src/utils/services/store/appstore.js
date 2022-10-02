import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../reducer/cart/cart-slice';
import wishlistSlice from '../reducer/wishlist/wishlist-slice';
import filterSlice from '../reducer/filter/filter-slice';

const store=configureStore({
    reducer:{
        cartSlice,
        wishlistSlice,
        filterSlice
    }
})

store.subscribe(()=>{
    // console.log("State Update .... ", store.getState());
}) 


export default store;
