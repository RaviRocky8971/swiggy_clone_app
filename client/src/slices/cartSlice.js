import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData : ""
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        setCartData : (state,action)=>{
            const {cartData} = action.payload
            state.addingcartData = cartData
        }
    }
})

export const{setCartData} =cartSlice.actions;
export default cartSlice.reducer;