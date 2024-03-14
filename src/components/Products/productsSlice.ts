import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types/ProductType';
import { getProducts } from '../../utils/productsApi/getProducts';

export interface ProductsState {
    value: ProductType[] | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
    value: null,
    status: 'idle'
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await getProducts();
      return response?.data;
    }
  );

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
      // fetchProducts(){}
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
          })
          .addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export default productsSlice.reducer;