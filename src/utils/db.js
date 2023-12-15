import fs from "fs/promises";
import path from "path";
const filePath = path.join(process.cwd(), "data", "db.json");
fs.chmod(filePath, 777);

export const getCars = async () => {
    const cars = await fs.readFile(filePath, {
        encoding: "utf-8",
    });

    return JSON.parse(cars)?.cars || [];
};

export const getCarById = async (carId) => {
    const cars = await getCars();
    const car = cars.find((car) => car.id == carId);

    return car;
};

export const deleteCar = async (carId) => {
    let cars = await getCars();

    const index = cars.findIndex((car) => car.id == carId);
    cars.splice(index, 1);

    await fs.writeFile(
        filePath,
        JSON.stringify({
            cars,
        }),
        { encoding: "utf-8" }
    );

    return true;
};

export const addCar = async (car) => {
    let cars = await getCars();

    const newId = cars.length > 0 ? Math.max(...cars.map((c) => c.id)) + 1 : 1;

    const newCar = { ...car, id: newId };
    cars.push(newCar);

    await fs.writeFile(
        filePath,
        JSON.stringify({
            cars,
        }),
        { encoding: "utf-8", flag: "wx" }
    );

    return cars;
};

export const updateCar = async (carId, updatedDetails) => {
    const cars = await getCars();
    const carIndex = cars.findIndex((c) => c.id == carId);

    if (carIndex !== -1) {
        const existingCar = cars[carIndex];

        const updatedCar = { ...existingCar, ...updatedDetails };

        cars[carIndex] = updatedCar;

        await fs.writeFile(
            filePath,
            JSON.stringify({
                cars,
            }),
            { encoding: "utf-8" }
        );

        return cars;
    } else {
        throw new Error(`Car with ID ${carId} not found`);
    }
};
