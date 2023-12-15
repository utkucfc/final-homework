import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import css from "@/styles/cars.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
export default function CarDetail({ car, onDeleteCar }) {
    const router = useRouter();
    const handleDeleteClick = () => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            onDeleteCar(car.id);
            router.push("/cars");
        }
    };
    return (
        <div className={css.carDetailMain}>
            <div className={css.container}>
                <img src={car.image}></img>
                <div className={css.overlay}>
                    <span className={`${css.brandOnImage}`}>
                        {car.brand.toUpperCase()}
                    </span>
                    <span className={css.modelOnImage}>
                        {car.model.toUpperCase()}
                    </span>
                </div>
            </div>
            <div className={css.carDetailTable}>
                <TableContainer
                    component={Paper}
                    sx={{ minWidth: 300, maxWidth: 300 }}
                >
                    <Table
                        sx={{ minWidth: 300, maxWidth: 300 }}
                        aria-label="customized table"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Specs</StyledTableCell>
                                <StyledTableCell align="right">
                                    Values
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow key={car.brand}>
                                <StyledTableCell component="th" scope="row">
                                    Brand:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.brand}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.model}>
                                <StyledTableCell component="th" scope="row">
                                    Model:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.model}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.startYear}>
                                <StyledTableCell component="th" scope="row">
                                    Start of Production:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.startYear}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.endYear}>
                                <StyledTableCell component="th" scope="row">
                                    End of Production:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.endYear}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.engine}>
                                <StyledTableCell component="th" scope="row">
                                    Engine:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.engine}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.horsePower}>
                                <StyledTableCell component="th" scope="row">
                                    Horsepower:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.horsePower} HP
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.torque}>
                                <StyledTableCell component="th" scope="row">
                                    Torque:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.torque} Nm
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.zeroToHundred}>
                                <StyledTableCell component="th" scope="row">
                                    0-100 kmh:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.zeroToHundred} s
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.topSpeed}>
                                <StyledTableCell component="th" scope="row">
                                    Top Speed:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.topSpeed} km/h
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.traction}>
                                <StyledTableCell component="th" scope="row">
                                    Traction:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.traction}
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer
                    component={Paper}
                    sx={{ minWidth: 400, maxWidth: 400 }}
                >
                    <Table
                        sx={{ minWidth: 400, maxWidth: 400 }}
                        aria-label="customized table"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Specs</StyledTableCell>
                                <StyledTableCell align="right">
                                    Values
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow key={car.transmission}>
                                <StyledTableCell component="th" scope="row">
                                    Transmission:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.transmission}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.numberOfSpeeds}>
                                <StyledTableCell component="th" scope="row">
                                    Number of Speeds:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.numberOfSpeeds}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.fuelType}>
                                <StyledTableCell component="th" scope="row">
                                    Fuel Type:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.fuelType}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.fuelConsumptionCity}>
                                <StyledTableCell component="th" scope="row">
                                    Fuel Consumption - City:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.fuelConsumptionCity} L
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.fuelConsumptionOpenRoad}>
                                <StyledTableCell component="th" scope="row">
                                    Fuel Consumption - Open Road:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.fuelConsumptionOpenRoad} L
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.fuelTankCapacity}>
                                <StyledTableCell component="th" scope="row">
                                    Fuel Tank Capacity:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.fuelTankCapacity} L
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.numberOfCylinders}>
                                <StyledTableCell component="th" scope="row">
                                    Number Of Cylinders:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.numberOfCylinders}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.numberOfValves}>
                                <StyledTableCell component="th" scope="row">
                                    Number Of Valves:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.numberOfValves}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.numberOfSeats}>
                                <StyledTableCell component="th" scope="row">
                                    Number Of Seats:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.numberOfSeats}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow key={car.numberOfDoors}>
                                <StyledTableCell component="th" scope="row">
                                    Number Of Doors:
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {car.numberOfDoors}
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <div>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}
