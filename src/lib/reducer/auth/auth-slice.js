import { createSlice } from "@reduxjs/toolkit";
import { clearAuthStorage, clearLocalStorage, setLocalStorage } from "../../../utils/localstorage";


const initialState={
    user: null,
    accessToken: "",
    loading: false,
}

const authSlice=createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        setUser(state, action){
            setLocalStorage("authUser", action.payload);
            return {
                ...state,
                user: action.payload,
            }
        },
        setAccessToken(state, action){
            setLocalStorage("authToken", { accessToken: action.payload });
            return {
                ...state,
                accessToken: action.payload
            }
        },
        clearUser(state, action){
            clearAuthStorage();
            return { ...state, user: null }
        },
        clearToken(state, action){
            clearLocalStorage("authToken");
            return { ...state, accessToken: "" }
        }
        
    }
})

export const { setAccessToken, setUser, clearToken, clearUser } = authSlice.actions;
export default authSlice.reducer;