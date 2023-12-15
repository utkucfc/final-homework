import CarCard from "@/components/CarCard";
import CarDetail from "@/components/carDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import css from "@/styles/cars.module.css";

export default function Cd() {
    const router = useRouter();
    const { id } = router.query;
    const [car, setCar] = useState();
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
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `http://localhost:3001/cars/${id}`
                    );
                    const data = await response.json();
                    setCar(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }
    }, [id]);
    if (!car) {
        return <div>Loading...</div>;
    } else {
        console.log(car);
        return (
            <div className={css.content}>
                <CarDetail car={car} onDeleteCar={handleDeleteCar} />
                {/* <CarCard car={car} /> */}
            </div>
        );
    }
}
