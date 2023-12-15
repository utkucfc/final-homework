import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [],
    },
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
    },
});

export const { setCars } = carsSlice.actions;
export const selectCars = (state) => state.cars.cars;

export default carsSlice.reducer;
