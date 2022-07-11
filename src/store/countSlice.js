import {createSlice} from "@reduxjs/toolkit"


const countSlice = createSlice({
    name: "countSlice",
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        incrementDown: state => state - 1
    }
})

export const {increment, incrementDown} = countSlice.actions;
export default countSlice.reducer