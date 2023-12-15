// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCars } from "@/redux/carsSlice";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//     id: Yup.string().required("Car ID is required"),
//     brand: Yup.string().required("Brand is required"),
//     model: Yup.string().required("Model is required"),
//     startYear: Yup.string().required("startYear is required"),
//     endYear: Yup.string().required("endYear is required"),
//     engine: Yup.string().required("engine is required"),
//     horsePower: Yup.string().required("horsePower is required"),
//     fuelType: Yup.string().required("fuelType is required"),
//     image: Yup.string().required("image is required"),
//     fuelConsumptionCity: Yup.string().required(
//         "fuelConsumptionCity is required"
//     ),
//     fuelConsumptionOpenRoad: Yup.string().required(
//         "fuelConsumptionOpenRoad is required"
//     ),
//     topSpeed: Yup.string().required("topSpeed is required"),
//     zeroToHundred: Yup.string().required("zeroToHundred is required"),
//     torque: Yup.string().required("torque is required"),
//     numberOfCylinders: Yup.string().required("numberOfCylinders is required"),
//     numberOfValves: Yup.string().required("numberOfValves is required"),
//     numberOfSeats: Yup.string().required("numberOfSeats is required"),
//     numberOfDoors: Yup.string().required("numberOfDoors is required"),
//     fuelTankCapacity: Yup.string().required("fuelTankCapacity is required"),
//     transmission: Yup.string().required("transmission is required"),
//     numberOfSpeeds: Yup.string().required("numberOfSpeeds is required"),
//     traction: Yup.string().required("traction is required"),
// });
// const UpdateCar = () => {
//     const dispatch = useDispatch();

//     const handleUpdateCar = async (values) => {
//         try {
//             await fetch(`http://localhost:3001/cars/${values.id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(values),
//             });

//             const updatedData = await fetch("http://localhost:3001/cars").then(
//                 (response) => response.json()
//             );
//             dispatch(setCars(updatedData));
//         } catch (error) {
//             console.error("Error updating car:", error);
//         }
//     };

//     const handleFetchCarData = async (values) => {
//         try {
//             const response = await fetch(
//                 `http://localhost:3001/cars/${values.id}`
//             );
//             const carData = await response.json();

//             if (carData) {
//                 setUpdatedCar(carData);
//             } else {
//                 setUpdatedCar(initialCarValues);
//             }
//         } catch (error) {
//             console.error("Error fetching car data:", error);
//         }
//     };

//     const initialCarValues = {
//         id: "",
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
//     };

//     return (
//         <div>
//             <h2>Update Car</h2>
//             <Formik
//                 initialValues={initialCarValues}
//                 validationSchema={UpdateCarSchema}
//                 onSubmit={(values) => handleUpdateCar(values)}
//             >
//                 <Form>
//                     <div>
//                         <label>Car ID:</label>
//                         <Field type="text" name="id" />
//                         <ErrorMessage name="id" component="div" />

//                         <button
//                             type="button"
//                             onClick={() => handleFetchCarData}
//                         >
//                             Fetch Car Data
//                         </button>

//                         {/* Add other form fields similarly */}

//                         <label>Brand:</label>
//                         <Field type="text" name="brand" />
//                         <ErrorMessage name="brand" component="div" />
//                         <label>Model:</label>
//                         <Field type="text" name="model" />
//                         <ErrorMessage name="model" component="div" />
//                         {/* ... (other form fields) */}
//                         <label>Start Year:</label>
//                         <Field type="text" name="startYear" />
//                         <ErrorMessage name="startYear" component="div" />
//                         <label>End Year:</label>
//                         <Field type="text" name="endYear" />
//                         <ErrorMessage name="endYear" component="div" />
//                         <label>Engine:</label>
//                         <Field type="text" name="engine" />
//                         <ErrorMessage name="engine" component="div" />
//                         <label>Horsepower:</label>
//                         <Field type="text" name="horsePower" />
//                         <ErrorMessage name="horsePower" component="div" />
//                         <label>Fuel Type:</label>
//                         <Field type="text" name="fuelType" />
//                         <ErrorMessage name="fuelType" component="div" />
//                         <label>Fuel Consumption - City:</label>
//                         <Field type="text" name="fuelConsumptionCity" />
//                         <ErrorMessage
//                             name="fuelConsumptionCity"
//                             component="div"
//                         />
//                         <label>Fuel Consumption Open Road:</label>
//                         <Field type="text" name="fuelConsumptionOpenRoad" />
//                         <ErrorMessage
//                             name="fuelConsumptionOpenRoad"
//                             component="div"
//                         />
//                         <label>Top Speed:</label>
//                         <Field type="text" name="topSpeed" />
//                         <ErrorMessage name="topSpeed" component="div" />
//                         <label>Zero To Hundred:</label>
//                         <Field type="text" name="zeroToHundred" />
//                         <ErrorMessage name="zeroToHundred" component="div" />
//                         <label>Torque:</label>
//                         <Field type="text" name="torque" />
//                         <ErrorMessage name="torque" component="div" />
//                         <label>Number Of Cylinders:</label>
//                         <Field type="text" name="numberOfCylinders" />
//                         <ErrorMessage
//                             name="numberOfCylinders"
//                             component="div"
//                         />
//                         <label>Number Of Valves:</label>
//                         <Field type="text" name="numberOfValves" />
//                         <ErrorMessage name="numberOfValves" component="div" />
//                         <label>Number Of Seats:</label>
//                         <Field type="text" name="numberOfSeats" />
//                         <ErrorMessage name="numberOfSeats" component="div" />
//                         <label>Number Of Doors:</label>
//                         <Field type="text" name="numberOfDoors" />
//                         <ErrorMessage name="numberOfDoors" component="div" />
//                         <label>Fuel Tank Capacity:</label>
//                         <Field type="text" name="fuelTankCapacity" />
//                         <ErrorMessage name="fuelTankCapacity" component="div" />
//                         <label>Transmission:</label>
//                         <Field type="text" name="transmission" />
//                         <ErrorMessage name="transmission" component="div" />
//                         <label>Number Of Speeds:</label>
//                         <Field type="text" name="numberOfSpeeds" />
//                         <ErrorMessage name="numberOfSpeeds" component="div" />
//                         <label>Traction:</label>
//                         <Field type="text" name="brand" />
//                         <ErrorMessage name="brand" component="div" />
//                         <label>Image URL:</label>
//                         <Field type="text" name="image" />
//                         <ErrorMessage name="image" component="div" />

//                         <button type="submit">Update Car</button>
//                     </div>
//                 </Form>
//             </Formik>
//         </div>
//     );
// };

// export default UpdateCar;
