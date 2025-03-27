import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filters: {
            name: ""
        }
    },
    reducers: {
        changeFilter(state, actions) {
            return state.filters.name = actions.payload

        }
    }
})
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;