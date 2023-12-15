import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCars } from "@/redux/carsSlice";
import { useFormik } from "formik";
import css from "@/styles/cars.module.css";
import * as Yup from "yup";
import { Button, Stack, TextField } from "@mui/material";

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
                `https://final-homework-utkucfc.vercel.app/api/cars/${values.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const response = await fetch(
                "https://final-homework-utkucfc.vercel.app/api/cars"
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
                `https://final-homework-utkucfc.vercel.app/api/cars/${formik.values.id}`
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
            <h2 className={css.title}>Update Car</h2>
            <div>
                {/* Formik usage */}

                <form className={css.addCarForm} onSubmit={formik.handleSubmit}>
                    <div className={css.fetchCarDiv}>
                        <TextField
                            id="outlined"
                            label="Car ID:"
                            variant="outlined"
                            type="text"
                            name="id"
                            value={formik.values.id}
                            onChange={formik.handleChange}
                            size="small"
                        />
                        <p>{formik.errors.id}</p>
                        <Button
                            sx={{ maxWidth: 275 }}
                            type="submit"
                            variant="contained"
                            color="success"
                            onClick={handleFetchCarData}
                        >
                            Fetch Car Data
                        </Button>
                    </div>
                    <Stack
                        className={css.stackCarForm}
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                    >
                        <div>
                            <TextField
                                id="outlined"
                                label="Brand:"
                                variant="outlined"
                                type="text"
                                name="brand"
                                value={formik.values.brand}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.brand}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Model:"
                                variant="outlined"
                                type="text"
                                name="model"
                                value={formik.values.model}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.model}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Start Year:"
                                variant="outlined"
                                type="text"
                                name="startYear"
                                value={formik.values.startYear}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.startYear}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="End Year:"
                                variant="outlined"
                                type="text"
                                name="endYear"
                                value={formik.values.endYear}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.endYear}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Engine:"
                                variant="outlined"
                                type="text"
                                name="engine"
                                value={formik.values.engine}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.engine}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Horse Power:"
                                variant="outlined"
                                type="text"
                                name="horsePower"
                                value={formik.values.horsePower}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.horsePower}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Fuel Type:"
                                variant="outlined"
                                type="text"
                                name="fuelType"
                                value={formik.values.fuelType}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.fuelType}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Fuel Consumption - City:"
                                variant="outlined"
                                type="text"
                                name="fuelConsumptionCity"
                                value={formik.values.fuelConsumptionCity}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.fuelConsumptionCity}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Fuel Consumption - Open Road:"
                                variant="outlined"
                                type="text"
                                name="fuelConsumptionOpenRoad"
                                value={formik.values.fuelConsumptionOpenRoad}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.fuelConsumptionOpenRoad}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Top Speed:"
                                variant="outlined"
                                type="text"
                                name="topSpeed"
                                value={formik.values.topSpeed}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.topSpeed}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="0-100:"
                                variant="outlined"
                                type="text"
                                name="zeroToHundred"
                                value={formik.values.zeroToHundred}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.zeroToHundred}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Torque:"
                                variant="outlined"
                                type="text"
                                name="torque"
                                value={formik.values.torque}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.torque}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Number Of Cylinders:"
                                variant="outlined"
                                type="text"
                                name="numberOfCylinders"
                                value={formik.values.numberOfCylinders}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.numberOfCylinders}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Number Of Valves:"
                                variant="outlined"
                                type="text"
                                name="numberOfValves"
                                value={formik.values.numberOfValves}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.numberOfValves}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Number Of Seats:"
                                variant="outlined"
                                type="text"
                                name="numberOfSeats"
                                value={formik.values.numberOfSeats}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.numberOfSeats}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Number Of Doors:"
                                variant="outlined"
                                type="text"
                                name="numberOfDoors"
                                value={formik.values.numberOfDoors}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.numberOfDoors}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Fuel Tank Capacity:"
                                variant="outlined"
                                type="text"
                                name="fuelTankCapacity"
                                value={formik.values.fuelTankCapacity}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.fuelTankCapacity}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Transmission:"
                                variant="outlined"
                                type="text"
                                name="transmission"
                                value={formik.values.transmission}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.transmission}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Number Of Speeds:"
                                variant="outlined"
                                type="text"
                                name="numberOfSpeeds"
                                value={formik.values.numberOfSpeeds}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.numberOfSpeeds}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Traction:"
                                variant="outlined"
                                type="text"
                                name="traction"
                                value={formik.values.traction}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.traction}</p>
                        </div>
                        <div>
                            <TextField
                                id="outlined"
                                label="Image URL:"
                                variant="outlined"
                                type="text"
                                name="image"
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                size="small"
                            />
                            <p>{formik.errors.image}</p>
                        </div>
                    </Stack>
                    <Button
                        className={css.submitButton}
                        sx={{ maxWidth: 275 }}
                        type="submit"
                        variant="contained"
                        color="success"
                    >
                        Update Car
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCar;
