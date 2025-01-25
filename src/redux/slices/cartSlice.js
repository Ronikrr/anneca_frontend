import { createSlice } from '@reduxjs/toolkit';
import { formatPrice } from '../../utils/formatPrice';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            
          
            const existingItem = state.items.find(item => item.id === newItem.id);
            const itemPrice = parseFloat(formatPrice(newItem.price));
            const itemTotalPrice = itemPrice * newItem.quantity;

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += itemTotalPrice;
            } else {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: itemPrice,
                    quantity: newItem?.quantity || 1,
                    totalPrice: itemTotalPrice,
                    image:newItem?.image,
                    cartsize:newItem?.size,
                    sku:newItem?.sku
                });
            }

            state.totalQuantity += newItem.quantity;
            state.totalPrice += itemTotalPrice;
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        updateItemQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                const itemPrice = parseFloat(formatPrice(existingItem.price));
                state.totalQuantity += quantity - existingItem.quantity;
                state.totalPrice += (quantity - existingItem.quantity) * itemPrice;
                existingItem.quantity = quantity;
                existingItem.totalPrice = quantity * itemPrice;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
