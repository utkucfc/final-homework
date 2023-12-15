// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCars } from "@/redux/carsSlice";

// const AddCar = () => {
//     const dispatch = useDispatch();

//     const [newCar, setNewCar] = useState({
//         brand: "",
//         model: "",
//         startYear: "",
//         endYear: "",
//         engine: "",
//         horsePower: "",
//         fuelType: "",
//         image: "",
//         fuelConsumptionCity: "",
//         fuelConsumptionOpenRoad: "",
//         topSpeed: "",
//         zeroToHundred: "",
//         torque: "",
//         numberOfCylinders: "",
//         numberOfValves: "",
//         numberOfSeats: "",
//         numberOfDoors: "",
//         fuelTankCapacity: "",
//         transmission: "",
//         numberOfSpeeds: "",
//         traction: "",
//     });

//     const handleAddCar = async () => {
//         try {
//             await fetch("http://localhost/cars", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newCar),
//             });

//             const updatedData = await fetch("http://localhost/cars").then(
//                 (response) => response.json()
//             );
//             dispatch(setCars(updatedData));
//             setNewCar({
//                 id: "",
//                 brand: "",
//                 model: "",
//                 startYear: "",
//                 endYear: "",
//                 engine: "",
//                 horsePower: "",
//                 fuelType: "",
//                 image: "",
//                 fuelConsumptionCity: "",
//                 fuelConsumptionOpenRoad: "",
//                 topSpeed: "",
//                 zeroToHundred: "",
//                 torque: "",
//                 numberOfCylinders: "",
//                 numberOfValves: "",
//                 numberOfSeats: "",
//                 numberOfDoors: "",
//                 fuelTankCapacity: "",
//                 transmission: "",
//                 numberOfSpeeds: "",
//                 traction: "",
//             });
//         } catch (error) {
//             console.error("Error adding car:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Add a New Car</h2>
//             <div>
//                 <label>Brand:</label>
//                 <input
//                     type="text"
//                     value={newCar.brand}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, brand: e.target.value })
//                     }
//                 />
//                 <label>Model:</label>
//                 <input
//                     type="text"
//                     value={newCar.model}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, model: e.target.value })
//                     }
//                 />
//                 <label>Engine:</label>
//                 <input
//                     type="text"
//                     value={newCar.engine}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, engine: e.target.value })
//                     }
//                 />

//                 <label>Start Year:</label>
//                 <input
//                     type="text"
//                     value={newCar.startYear}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, startYear: e.target.value })
//                     }
//                 />

//                 <label>End Year:</label>
//                 <input
//                     type="text"
//                     value={newCar.endYear}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, endYear: e.target.value })
//                     }
//                 />

//                 <label>Horsepower:</label>
//                 <input
//                     type="text"
//                     value={newCar.horsePower}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, horsePower: e.target.value })
//                     }
//                 />

//                 <label>Fuel Type:</label>
//                 <select
//                     value={newCar.fuelType}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, fuelType: e.target.value })
//                     }
//                 >
//                     <option value="">Select Fuel Type</option>
//                     <option value="Petrol">Petrol</option>
//                     <option value="Diesel">Diesel</option>
//                     <option value="Hybrid">Hybrid</option>
//                     <option value="Electric">Electric</option>
//                 </select>

//                 <label>Fuel Consumption - City (Liter):</label>
//                 <input
//                     type="text"
//                     value={newCar.fuelConsumptionCity}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             fuelConsumptionCity: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Fuel Consumption - Open Road (Liter):</label>
//                 <input
//                     type="text"
//                     value={newCar.fuelConsumptionOpenRoad}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             fuelConsumptionOpenRoad: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Top Speed - km/h:</label>
//                 <input
//                     type="text"
//                     value={newCar.topSpeed}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             topSpeed: e.target.value,
//                         })
//                     }
//                 />

//                 <label>0-100 (sec):</label>
//                 <input
//                     type="text"
//                     value={newCar.zeroToHundred}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             zeroToHundred: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Torque:</label>
//                 <input
//                     type="text"
//                     value={newCar.torque}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             torque: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Number of Cylinders:</label>
//                 <input
//                     type="text"
//                     value={newCar.numberOfCylinders}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             numberOfCylinders: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Number of Valves:</label>
//                 <input
//                     type="text"
//                     value={newCar.numberOfValves}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             numberOfValves: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Number of Seats:</label>
//                 <input
//                     type="text"
//                     value={newCar.numberOfSeats}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             numberOfSeats: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Number of Doors:</label>
//                 <input
//                     type="text"
//                     value={newCar.numberOfDoors}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             numberOfDoors: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Fuel Tank Capacity (liter):</label>
//                 <input
//                     type="text"
//                     value={newCar.fuelTankCapacity}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             fuelTankCapacity: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Transmission:</label>
//                 <input
//                     type="text"
//                     value={newCar.transmission}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             transmission: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Number of Speeds:</label>
//                 <input
//                     type="text"
//                     value={newCar.numberOfSpeeds}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             numberOfSpeeds: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Traction:</label>
//                 <input
//                     type="text"
//                     value={newCar.traction}
//                     onChange={(e) =>
//                         setNewCar({
//                             ...newCar,
//                             traction: e.target.value,
//                         })
//                     }
//                 />

//                 <label>Image URL:</label>
//                 <input
//                     type="text"
//                     value={newCar.image}
//                     onChange={(e) =>
//                         setNewCar({ ...newCar, image: e.target.value })
//                     }
//                 />

//                 <button onClick={handleAddCar}>Add Car</button>
//             </div>
//         </div>
//     );
// };

// export default AddCar;

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCars } from "@/redux/carsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
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

const AddCar = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
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
            await handleAddCar(values);
        },
    });

    const handleAddCar = async (values) => {
        try {
            await fetch("http://localhost/api/cars", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const response = await fetch("http://localhost/api/cars");
            const data = await response.json();
            dispatch(setCars(data));

            // Reset the form
            formik.resetForm();
        } catch (error) {
            console.error("Error adding car:", error);
        }
    };

    return (
        <div>
            <h2>Add a New Car</h2>
            <div>
                {/* Formik usage */}
                <form onSubmit={formik.handleSubmit}>
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

                    <button type="submit">Add Car</button>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
