import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice";

export const store = configureStore({
    reducer: {
        cars: carsReducer,
    },
});
