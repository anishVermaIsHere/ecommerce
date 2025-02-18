import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getProductByCategory, getProductByQuery, getProducts} from '../../../services/api/product';



const initialState={
    products:[],
    loading:true
}

export const fetchProducts=createAsyncThunk(
    'fetchProducts',
    async ()=>{
        const response= await getProducts();
        return response.data;
    }
)

export const categoriseProducts=createAsyncThunk(
    'categoriseProducts',
    async (category)=>{
        const response= await getProductByCategory(category);
        return response.data;
    }
)

export const searchProducts=createAsyncThunk(
    'searchProducts',
    async(query)=>{
        const response= await getProductByQuery(query);
        return response.data;
    }
)

const filterSlice=createSlice({
    name:'filterSlice',
    initialState,
    reducers:{
        renderProducts(state,action){
            return {
                ...state,
                products:action.payload
            }
        },
        addSize(state,action){
            const {size,index}=action.payload;
            const findIndex=state.products.findIndex(item=>item.id==index);
            state.products[findIndex].size=size;
            return state;
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.loading=false;
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.products=[];
            state.loading=false;
        })
        builder.addCase(categoriseProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(categoriseProducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.loading=false;
        })
        builder.addCase(categoriseProducts.rejected,(state)=>{
            state.loading=false;
            state.products=[];
        })
        builder.addCase(searchProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(searchProducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.loading=false;
        })
        builder.addCase(searchProducts.rejected,(state)=>{
            state.loading=false;
            state.products=[];
        })
    }
})

export const {renderProducts,addSize}=filterSlice.actions;
export default filterSlice.reducer;