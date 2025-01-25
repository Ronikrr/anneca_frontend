import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const createAddress = createAsyncThunk(
    'address/createAddress',
    async (addressData, {getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(
                'https://anneca-backend-89l2.vercel.app/api/v1/address/user/address',
                addressData,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            return  response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Something went wrong!';
            toast.error(errorMessage);
            return rejectWithValue(error.response?.data);
            // return rejectWithValue(error.response.data);
        }
    }
);

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addresses: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createAddress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createAddress.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.addresses.push(action.payload.data);
            })
            .addCase(createAddress.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
            });
    },
});

export default addressSlice.reducer;