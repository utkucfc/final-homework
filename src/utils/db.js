import mongoose from "mongoose";
import CarSchema from "@/models/Car";

export const getCars = async () => {
    let client;
    try {
        client = await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }

    const cars = (await client.model("Car").find({})) || [];

    await mongoose.disconnect();

    return cars;
};

export const getCarById = async (carId) => {
    let client;
    try {
        client = await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }

    const car = await client.model("Car").findOne({ id: carId });

    await mongoose.disconnect();

    return car;
};

export const deleteCar = async (carId) => {
    let client;
    try {
        client = await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }

    await client.model("Car").findOneAndDelete({ id: carId });

    await mongoose.disconnect();
};

export const addCar = async (car) => {
    let client;
    try {
        client = await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }

    let cars = (await client.model("Car").find({})) || [];

    const newId =
        cars.length > 0 ? (Math.max(...cars.map((c) => c.id)) || 0) + 1 : 1;

    const newCar = { ...car, id: newId };

    await client.model("Car").create(newCar);

    await mongoose.disconnect();
};

export const updateCar = async (carId, updatedDetails) => {
    let client;
    try {
        client = await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }

    const filter = { id: carId };
    const update = { $set: updatedDetails };

    await client.model("Car").updateOne(filter, update);

    await mongoose.disconnect();
};
