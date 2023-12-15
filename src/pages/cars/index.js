import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars, selectCars } from "@/redux/carsSlice";
import css from "@/styles/cars.module.css";
import CarCard from "@/components/CarCard";
import { Stack } from "@mui/material";

const Home = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/cars");
                const data = await response.json();
                dispatch(setCars(data));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [dispatch]);

    const handleDeleteCar = async (carId) => {
        try {
            await fetch(`http://localhost:3001/cars/${carId}`, {
                method: "DELETE",
            });

            const updatedData = await fetch("http://localhost:3001/cars").then(
                (response) => response.json()
            );
            dispatch(setCars(updatedData));
        } catch (error) {
            console.error("Error deleting car:", error);
        }
    };

    return (
        <div className={css.main}>
            <h1>Car List</h1>
            <ul>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                >
                    {cars.map((car) => (
                        <li key={car.id}>
                            <CarCard car={car} onDeleteCar={handleDeleteCar} />
                        </li>
                    ))}
                </Stack>
            </ul>
        </div>
    );
};

export default Home;
