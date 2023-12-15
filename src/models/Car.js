import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    brand: String,
    model: String,
    startYear: String,
    endYear: String,
    engine: String,
    horsePower: String,
    fuelType: String,
    image: String,
    fuelConsumptionCity: String,
    fuelConsumptionOpenRoad: String,
    topSpeed: String,
    zeroToHundred: String,
    torque: String,
    numberOfCylinders: String,
    numberOfValves: String,
    numberOfSeats: String,
    numberOfDoors: String,
    fuelTankCapacity: String,
    transmission: String,
    numberOfSpeeds: String,
    traction: String,
});

module.exports = mongoose.models.Car || mongoose.model("Car", CarSchema);
