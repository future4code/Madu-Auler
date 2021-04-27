import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage, goToLoginPage, goToListTripsPage, goToHomePage } from "../routes/coordinator";
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TripContainer, Trips, Buttons } from "./styled-components"
import logo from "../img/favicon.png"

const ListTripsPage = () => {
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
                                    <Buttons onClick={() => goToApplicationFormPage(history)}>Application Form</Buttons>

                                </Trips>
                            )
                        })}
                    </Container>
                </TripContainer>
            </Banner>


        </>
    );
};

export default ListTripsPage;