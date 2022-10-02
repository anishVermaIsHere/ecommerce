import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getProducts} from '../../../../utils/services/clientapis/api';
import {filterConstants} from '../../../../utils/constants/constant-data';


const{ratings}=filterConstants;
let productContainer=[];

const initialState={
    products:[],
    loading:true,
    filteredProducts:[],
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
        const response= await getProducts();
        let filtProds=response.data.filter(product=>product.category==category);
        return filtProds;
    }
)

const filterSlice=createSlice({
    name:'filterSlice',
    initialState,
    reducers:{
        renderProducts(state,action){
            state.products=action.payload;
            return state
        },
        renderCategProducts(state,action){
            state.filteredProducts=action.payload;
            return state
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
            state.products=[]
            state.loading=false;
        })
        builder.addCase(categoriseProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(categoriseProducts.fulfilled,(state,action)=>{
            state.filteredProducts=action.payload
            state.loading=false;
        })
        builder.addCase(categoriseProducts.rejected,(state)=>{
            state.filteredProducts=[]
            state.loading=false;
        })
    }
})

export const {renderProducts,renderCategProducts,filterByPrice,filterByRating}=filterSlice.actions;
export default filterSlice.reducer;