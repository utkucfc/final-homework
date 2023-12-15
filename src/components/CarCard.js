import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import css from "@/styles/cars.module.css";

export default function CarCard({ car, onDeleteCar }) {
    const handleDeleteClick = (e) => {
        e.preventDefault();

        if (window.confirm("Are you sure you want to delete this car?")) {
            onDeleteCar(car.id);
        }
    };
    return (
        <Card className={css.carCard} sx={{ maxWidth: 350 }}>
            <CardActionArea href={`/cars/${car.id}`}>
                <CardMedia
                    sx={{ width: 350, height: 250 }}
                    component="img"
                    image={car.image}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {car.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className={css.spec}>
                            {/* <span>Car ID: {car.id}</span> */}
                            <span>Engine: {car.engine}</span>
                            <span>Fuel Type: {car.fuelType}</span>
                            <span>Start Year: {car.startYear}</span>
                            <span>End Year: {car.endYear}</span>
                        </span>
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
