import { createSlice } from '@reduxjs/toolkit';
import { formatPrice } from '../../utils/formatPrice';

const initialState = {
    items: [],
};

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            const itemPrice = parseFloat(formatPrice(newItem.price));

            if (existingItem) {
                state.items = state.items.filter(item => item.id !== newItem?.id);
            } else {
                state.items.push({
                    id: newItem.id,
                    image: newItem?.image?.url,
                    name: newItem.name,
                    price: itemPrice,
                });
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, clearCart } = wishListSlice.actions;
export default wishListSlice.reducer;
