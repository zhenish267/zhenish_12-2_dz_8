import {createSlice} from "@reduxjs/toolkit"
import {increment, incrementDown} from "./countSlice";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        age:17,
        name: "Ilim"
    },
    extraReducers: {
        [increment]: (state) => {
            state.age += 1
        },
        [incrementDown]: (state) => {
            state.age -= 1
        }
    }
})

export default usersSlice.reducer;
