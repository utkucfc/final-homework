import CarCard from "@/components/CarCard";
import CarDetail from "@/components/carDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import css from "@/styles/cars.module.css";

export default function Cd() {
    const router = useRouter();
    const { id } = router.query;
    const [car, setCar] = useState();
    const [message, setMessage] = useState("Loading...");

    const handleDeleteCar = async (carId) => {
        try {
            await fetch(
                `https://final-homework-rho.vercel.app/api/cars/${carId}`,
                {
                    method: "DELETE",
                }
            );

            router.push("/cars");
        } catch (error) {
            console.error("Error deleting car:", error);
        }
    };
    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const response = await fetch(
                        `https://final-homework-rho.vercel.app/api/cars/${id}`
                    );
                    if (!response.ok) {
                        return setMessage("Car Not Found...");
                    }
                    const data = await response.json();
                    setCar(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            })();
        }
    }, [id]);
    if (!car) {
        return (
            <div>
                <h1>{message}</h1>
            </div>
        );
    } else {
        return (
            <div className={css.content}>
                <CarDetail car={car} onDeleteCar={handleDeleteCar} />
                {/* <CarCard car={car} /> */}
            </div>
        );
    }
}
