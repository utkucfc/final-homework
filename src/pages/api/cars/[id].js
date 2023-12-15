import { deleteCar, updateCar, getCarById } from "@/utils/db";

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === "GET") {
        const car = await getCarById(id);
        if (!car) {
            return res.status(404).send("Not found");
        }
        return res.status(200).json(car);
    } else if (req.method === "DELETE") {
        await deleteCar(id);
        return res.status(201).json({ success: true });
    } else if (req.method === "PUT") {
        try {
            const cars = await updateCar(id, req.body);
            return res.status(200).json(cars);
        } catch {
            return res.status(500).json({ success: false });
        }
    } else {
        return res.status(405).send("Method Not Allowed");
    }
}
