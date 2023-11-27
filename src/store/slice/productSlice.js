import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        const response = await fetch('http://localhost:3333/products/all')
        const data = await response.json();
        return data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        search(state, { payload }) {
            state.list = state.list.map(elem => ({
                ...elem,
                show: {
                    ...elem.show,
                    search: elem.title.toLowerCase().startsWith(payload.toLowerCase())
                }
            }));
        },

        priceFilter(state, { payload }) {
            state.list = state.list.map(elem => {
                const discountedPrice = elem.discont_price ? elem.discont_price : elem.price;
                return {
                    ...elem,
                    show: {
                        ...elem.show,
                        price: discountedPrice >= payload.min && discountedPrice <= payload.max,
                    },
                };
            });
        },
        
        sortFilter(state, { payload }) {
            console.log(payload);
            if (payload === 1) {
                state.list.sort((a, b) => a.title.localeCompare(b.title))
            } else if (payload === 2) {
                state.list.sort((a, b) => b.title.localeCompare(a.title))
            } else if (payload === 3) {
                state.list.sort((a, b) => a.price - b.price)
            } else if (payload === 4) {
                state.list.sort((a, b) => b.price - a.price)
            }
        },

        toggleDiscounted(state, { payload }) {
            state.list = state.list.map(elem => ({
                ...elem,
                show: {
                    ...elem.show,
                    discounted: payload ? elem.discont_price !== null : true
                }
            }));
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, { payload }) => {
                state.status = 'ready';
                const show = { price: true };
                state.list = payload.map(elem => ({ ...elem, show }));
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.status = 'error';
            });
    },
})

export default productSlice.reducer;
export const { search, priceFilter, toggleDiscounted, sortFilter } = productSlice.actions;