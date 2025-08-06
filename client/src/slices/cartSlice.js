import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartData: (state, action) => {
            const { cartData } = action.payload;
            state.cartData = cartData;
        },
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cartData.findIndex(item => item.id === newItem.id);
            
            if (existingItemIndex >= 0) {
                // Update existing item
                state.cartData[existingItemIndex].count += newItem.count;
                // Recalculate total price including custom options
                const customOptionsTotal = state.cartData[existingItemIndex].customOptions.reduce((sum, option) => sum + option.price, 0);
                state.cartData[existingItemIndex].totalPrice = state.cartData[existingItemIndex].count * (state.cartData[existingItemIndex].basePrice + customOptionsTotal);
            } else {
                // Add new item
                state.cartData.push(newItem);
            }
        },
        updateCartItem: (state, action) => {
            const { id, count } = action.payload;
            const itemIndex = state.cartData.findIndex(item => item.id === id);
            
            if (itemIndex >= 0) {
                if (count <= 0) {
                    // Remove item if count is 0 or less
                    state.cartData.splice(itemIndex, 1);
                } else {
                    // Update count and total price
                    state.cartData[itemIndex].count = count;
                    const customOptionsTotal = state.cartData[itemIndex].customOptions.reduce((sum, option) => sum + option.price, 0);
                    state.cartData[itemIndex].totalPrice = count * (state.cartData[itemIndex].basePrice + customOptionsTotal);
                }
            }
        },
        clearCart: (state) => {
            state.cartData = [];
        }
    }
})

export const { setCartData, addToCart, updateCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;