import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToCreateTripPage, goToTripDetailsPage, goToHomePage, goToLoginPage, goToListTripsPage, goToApplicationFormPage } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TripContainer, Trips, Buttons } from "./styled-components"
import logo from "../img/favicon.png"

const AdminHomePage = () => {
    useProtectedPage();
    const history = useHistory()
    const [tripList, setTripList] = useState([])


    const getTripsList = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/maduauler-cruz/trips")
            .then((res) => {
                setTripList(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const deleteTrip = (trip) => {
        const token = window.localStorage.getItem("token");
        if (window.confirm(`Do you want to delete ${trip.name}?`)) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maduauler-cruz/trips/${trip.id}`, {
                    headers: {
                        auth: token,
                    },
                })
                .then((res) => {
                    alert("Deleted!");
                    getTripsList();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        getTripsList()
    }, [])



    return (
        <>
            <Banner>
                <Header>
                    <Container>
                        <div><ButtonHeader onClick={() => goToLoginPage(history)}>Administrative Area</ButtonHeader></div>
                        <LogoButton onClick={() => goToHomePage(history)}><Logobox><Logo src={logo}></Logo></Logobox></LogoButton>
                        <div><ButtonHeader onClick={() => goToListTripsPage(history)}>Travel List</ButtonHeader></div>
                    </Container>
                </Header>


                <TripContainer>

                    <Container>

                        {tripList.map((trip) => {
                            return (
                                <Trips>

                                    <h2>Name: {trip.name}</h2>
                                    <p>Description: {trip.description}</p>
                                    <p>Planet: {trip.planet}</p>
                                    <p>Duration in days: {trip.durationInDays}</p>
                                    <p>Date: {trip.date}</p>
                                    <Buttons onClick={() => goToCreateTripPage(history)}>Criar Viagem</Buttons>
                                    <Buttons onClick={() => deleteTrip(trip)}>Delete</Buttons>
                                    <Buttons onClick={() => goToTripDetailsPage(history, trip.id)} key={trip.name}>Check Details</Buttons>

                                </Trips>
                            )
                        })}
                    </Container>
                </TripContainer>

            </Banner>


        </>
    );
};

export default AdminHomePage