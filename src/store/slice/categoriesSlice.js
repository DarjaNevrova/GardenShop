import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetch('http://localhost:3333/categories/all');
        const data = await response.json();
        return data
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.status = 'ready';
                state.list = payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = 'error';
            });
    },
})

export default categoriesSlice.reducer;