import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    totalWishlist:0
};

const wishlistSlice=createSlice({
    name:'wishlistSlice',
    initialState,
    reducers:{
        addWishlist(state,action){
            let item=action.payload;
            let itemIndex=state.products.findIndex((prod)=>{
                return prod.id==item.id;
              })
            // to check the item is already saved or not in wishlist
              if(itemIndex<0){
                state.totalWishlist=state.totalWishlist+1;
                state.products.push(item);
              }
        },
        removeWish(state,action){
           let newWishlist=state.products.filter((ele)=>{
               return ele.id!==action.payload.id
            })
            state.products=newWishlist;
            if(state.totalWishlist>0){
              state.totalWishlist=state.totalWishlist-1;
            }
        }
    }
})

export const {addWishlist,removeWish}=wishlistSlice.actions;
export default wishlistSlice.reducer;