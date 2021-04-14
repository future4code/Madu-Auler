import axios from "axios";
import React, { useEffect, useState, useParams } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToHomePage, goToLoginPage, goToPreviousPage, goToListTripsPage } from "../routes/coordinator"
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TextBox, HeadingMainPrimary, HeadingPrimary, HeadingPrimarySub } from "./styled-components"
import logo from "../img/favicon.png"

const TripDetailsPage = () => {
    useProtectedPage();
    const params = useParams();
    const [trip, setTrip] = useState({});
    const history = useHistory();

    useEffect(() => {
        getTripDetail(params.id);
    }, []);

    const getTripDetail = (id) => {
        const token = window.localStorage.getItem("token");

        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maduauler-cruz/trip/${id}`,
                {
                    headers: {
                        auth: token
                    }
                }
            )
            .then((res) => {
                setTrip(res.data.trip);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const logout = () => {
        window.localStorage.removeItem("token");
        history.push("/login");
    };

    return (
        <>
            <Banner>
                <Header>
                    <Container>
                        <div><ButtonHeader onClick={() => goToLoginPage(history)}>Area Administrativa</ButtonHeader></div>
                        <LogoButton onClick={() => goToHomePage(history)}><Logobox><Logo src={logo}></Logo></Logobox></LogoButton>
                        <div><ButtonHeader onClick={() => goToListTripsPage(history)}>Lista de Viagens</ButtonHeader></div>
                    </Container>
                </Header>
                <TextBox>
                    <HeadingPrimary>
                        <h1>GetTripDetail Page</h1>
                        <h2>{trip.name}</h2>
                        <p>{trip.date}</p>
                        <p>{trip.description}</p>
                        <button onClick={logout}>Logout</button>
                    </HeadingPrimary>

                </TextBox>
            </Banner>

        </>
    );
};

export default TripDetailsPage