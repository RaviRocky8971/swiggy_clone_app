import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: [],
    restaurantName: ""
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartData: (state, action) => {
            state.cartData = action.payload.cartData;
        },
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cartData.findIndex(item => item.id === newItem.id);

            if (existingItemIndex >= 0) {
                state.cartData[existingItemIndex].count += newItem.count;
                const customOptionsTotal = state.cartData[existingItemIndex].customOptions.reduce((sum, option) => sum + option.price, 0);
                state.cartData[existingItemIndex].totalPrice = state.cartData[existingItemIndex].count * (state.cartData[existingItemIndex].basePrice + customOptionsTotal);
            } else {
                state.cartData.push(newItem);
            }
        },
        updateCartItem: (state, action) => {
            const { id, count } = action.payload;
            const itemIndex = state.cartData.findIndex(item => item.id === id);

            if (itemIndex >= 0) {
                if (count <= 0) {
                    state.cartData.splice(itemIndex, 1);
                } else {
                    state.cartData[itemIndex].count = count;
                    const customOptionsTotal = state.cartData[itemIndex].customOptions.reduce((sum, option) => sum + option.price, 0);
                    state.cartData[itemIndex].totalPrice = count * (state.cartData[itemIndex].basePrice + customOptionsTotal);
                }
            }
        },
        clearCart: (state) => {
            state.cartData = [];
            state.restaurantName = "";
        },
        setRestaurantName: (state, action) => {
            state.restaurantName = action.payload;
        }
    }
});

export const { setCartData, addToCart, updateCartItem, clearCart, setRestaurantName } = cartSlice.actions;
export default cartSlice.reducer;