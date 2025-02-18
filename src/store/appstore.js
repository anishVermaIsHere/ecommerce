import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../lib/reducer/cart/cart-slice';
import wishlistSlice from '../lib/reducer/wishlist/wishlist-slice';
import filterSlice from '../lib/reducer/filter/filter-slice';
import authSlice from '../lib/reducer/auth/auth-slice';

const store=configureStore({
    reducer:{
        cartSlice,
        wishlistSlice,
        filterSlice,
        authSlice
    }
})

store.subscribe(()=>{
    // console.log("State Update .... ", store.getState());
}) 


export default store;
