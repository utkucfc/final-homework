import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCars } from "@/redux/carsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    id: Yup.string().required("Car ID is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    startYear: Yup.string().required("Start Year is required"),
    endYear: Yup.string().required("End Year is required"),
    engine: Yup.string().required("Engine is required"),
    horsePower: Yup.string().required("Horse Power is required"),
    fuelType: Yup.string().required("Fuel Type is required"),
    image: Yup.string().required("Image is required"),
    fuelConsumptionCity: Yup.string().required(
        "Fuel Consumption - City is required"
    ),
    fuelConsumptionOpenRoad: Yup.string().required(
        "Fuel Consumption - Open Road is required"
    ),
    topSpeed: Yup.string().required("Top Speed is required"),
    zeroToHundred: Yup.string().required("0-100 is required"),
    torque: Yup.string().required("Torque is required"),
    numberOfCylinders: Yup.string().required("Number of Cylinders is required"),
    numberOfValves: Yup.string().required("Number of Valves is required"),
    numberOfSeats: Yup.string().required("Number of Seats is required"),
    numberOfDoors: Yup.string().required("Number Of Doors is required"),
    fuelTankCapacity: Yup.string().required("Fuel Tank Capacity is required"),
    transmission: Yup.string().required("Transmission is required"),
    numberOfSpeeds: Yup.string().required("Number of Speeds is required"),
    traction: Yup.string().required("Traction is required"),
});
const UpdateCar = () => {
    const dispatch = useDispatch();

    // formik hook'unu kullanarak formun durumunu yönet
    const formik = useFormik({
        initialValues: {
            id: "",
            brand: "",
            model: "",
            startYear: "",
            endYear: "",
            engine: "",
            horsePower: "",
            fuelType: "",
            image: "",
            fuelConsumptionCity: "",
            fuelConsumptionOpenRoad: "",
            topSpeed: "",
            zeroToHundred: "",
            torque: "",
            numberOfCylinders: "",
            numberOfValves: "",
            numberOfSeats: "",
            numberOfDoors: "",
            fuelTankCapacity: "",
            transmission: "",
            numberOfSpeeds: "",
            traction: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            // form gönderildiğinde yapılacak işlemler
            await handleUpdateCar(values);
        },
    });

    const handleUpdateCar = async (values) => {
        try {
            await fetch(
                `https://final-homework-rho.vercel.app/api/cars/${values.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const response = await fetch(
                "https://final-homework-rho.vercel.app/api/cars"
            );
            const data = await response.json();
            dispatch(setCars(data));

            // formu sıfırla
            formik.resetForm();
        } catch (error) {
            console.error("Error updating car:", error);
        }
    };

    const handleFetchCarData = async () => {
        try {
            const response = await fetch(
                `https://final-homework-rho.vercel.app/api/cars/${formik.values.id}`
            );
            const carData = await response.json();

            if (carData) {
                // fetched car data'ya göre form değerlerini güncelle
                formik.setValues({
                    ...carData,
                });
            } else {
                // formu temizle
                formik.resetForm();
            }
        } catch (error) {
            console.error("Error fetching car data:", error);
        }
    };

    return (
        <div>
            <h2>Update Car</h2>
            <div>
                {/* Formik kullanımı */}
                <form onSubmit={formik.handleSubmit}>
                    <label>Car ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={formik.values.id}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.id}</div>
                    <button type="button" onClick={handleFetchCarData}>
                        Fetch Car Data
                    </button>

                    <label>Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={formik.values.brand}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.brand}</div>
                    <label>Model:</label>
                    <input
                        type="text"
                        name="model"
                        value={formik.values.model}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.model}</div>
                    <label>Start Year:</label>
                    <input
                        type="text"
                        name="startYear"
                        value={formik.values.startYear}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.startYear}</div>
                    <label>End Year:</label>
                    <input
                        type="text"
                        name="endYear"
                        value={formik.values.endYear}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.endYear}</div>
                    <label>Engine:</label>
                    <input
                        type="text"
                        name="engine"
                        value={formik.values.engine}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.engine}</div>
                    <label>Horsepower:</label>
                    <input
                        type="text"
                        name="horsePower"
                        value={formik.values.horsePower}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.horsePower}</div>
                    <label>Fuel Type:</label>
                    <input
                        type="text"
                        name="fuelType"
                        value={formik.values.fuelType}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.fuelType}</div>
                    <label>Fuel Consumption - City:</label>
                    <input
                        type="text"
                        name="fuelConsumptionCity"
                        value={formik.values.fuelConsumptionCity}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.fuelConsumptionCity}</div>
                    <label>Fuel Consumption Open Road:</label>
                    <input
                        type="text"
                        name="fuelConsumptionOpenRoad"
                        value={formik.values.fuelConsumptionOpenRoad}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.fuelConsumptionOpenRoad}</div>
                    <label>Top Speed:</label>
                    <input
                        type="text"
                        name="topSpeed"
                        value={formik.values.topSpeed}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.topSpeed}</div>
                    <label>0-100:</label>
                    <input
                        type="text"
                        name="zeroToHundred"
                        value={formik.values.zeroToHundred}
                        onChange={formik.handleChange}
                    />
                    <label>Torque:</label>
                    <input
                        type="text"
                        name="torque"
                        value={formik.values.torque}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.torque}</div>
                    <label>Number Of Cylinders:</label>
                    <input
                        type="text"
                        name="numberOfCylinders"
                        value={formik.values.numberOfCylinders}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.numberOfCylinders}</div>
                    <label>Number Of Valves:</label>
                    <input
                        type="text"
                        name="numberOfValves"
                        value={formik.values.numberOfValves}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.numberOfValves}</div>
                    <label>Number Of Seats:</label>
                    <input
                        type="text"
                        name="numberOfSeats"
                        value={formik.values.numberOfSeats}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.numberOfSeats}</div>
                    <label>Number Of Doors:</label>
                    <input
                        type="text"
                        name="numberOfDoors"
                        value={formik.values.numberOfDoors}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.numberOfDoors}</div>
                    <label>Fuel Tank Capacity:</label>
                    <input
                        type="text"
                        name="fuelTankCapacity"
                        value={formik.values.fuelTankCapacity}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.fuelTankCapacity}</div>
                    <label>Transmission:</label>
                    <input
                        type="text"
                        name="transmission"
                        value={formik.values.transmission}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.transmission}</div>
                    <label>Number Of Speeds:</label>
                    <input
                        type="text"
                        name="numberOfSpeeds"
                        value={formik.values.numberOfSpeeds}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.numberOfSpeeds}</div>
                    <label>Traction:</label>
                    <input
                        type="text"
                        name="traction"
                        value={formik.values.traction}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.traction}</div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                    />
                    <div>{formik.errors.image}</div>

                    <button type="submit">Update Car</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCar;
