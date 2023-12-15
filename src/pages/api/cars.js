// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { addCar, getCars } from "@/utils/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const cars = await getCars();
        res.status(200).json(cars);
    } else if (req.method === "POST") {
        const cars = await addCar(req.body);
        res.status(200).json(cars);
    } else {
        return res.status(405).send("Method Not Allowed");
    }
}
