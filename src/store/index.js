import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./countSlice"
import usersReducer from "./usersSlice"
import usersListReducer from "./usersListSlice";

export default configureStore({
    reducer: {
        countReducer,
        usersReducer,
        usersListReducer
    }
})