import { createSlice } from "@reduxjs/toolkit";

const initialState={
  products:localStorage.getItem("products") ? 
  JSON.parse(localStorage.getItem("products"))
  : [], 
  cartVal:0,
  totalAmount:0 
};

const initialVal=initialState.totalAmount;

const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
      addCart(state,action){
        let item=action.payload;          
        state.cartVal=state.cartVal+1;
          state.products.push(item);
      },
      addQtyandTotalPrice(state,action){
        let item=action.payload;
        let index=state.products.findIndex(prod=>prod.id==item.id);
          let qty=state.products[index].quantity=1;
            state.products[index].totalPrice=item.price*qty;
      },
      removeCart(state,action){
        let item=action.payload;
        let newProducts=state.products.filter(prod=>prod.id!==item.id);
        state.products=newProducts;
        state.cartVal=state.cartVal-1;
      },
      incrementQty(state,action){
        let item=action.payload;
        let itemIndex=state.products.findIndex((prod)=>prod.id==item.id);
        let totalQty=state.products[itemIndex].quantity+=1;    
        let subTotal=state.products[itemIndex].price*totalQty;
        state.products[itemIndex].totalPrice=subTotal;
      },
      decrementQty(state,action){
        let item=action.payload;
        let itemIndex=state.products.findIndex((prod)=>prod.id==item.id);
        if(item.quantity>1){
          state.products[itemIndex].quantity-=1;    
        }
        let totalQty=state.products[itemIndex].quantity;
        let subTotal=state.products[itemIndex].price*totalQty;
        state.products[itemIndex].totalPrice=subTotal;
      },
      calcTotal(state,action){
        let grandTotal=state.products.reduce((total,next)=>{
          return total+=next.totalPrice
      },initialVal)
        state.totalAmount=grandTotal;
      }
    }
})

export const {addCart,addQtyandTotalPrice,removeCart,incrementQty,decrementQty,calcTotal}=cartSlice.actions;

export default cartSlice.reducer;