import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToHomePage, goToLoginPage, goToListTripsPage } from "../routes/coordinator"
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TripContainer, Trips, Buttons } from "./styled-components"
import logo from "../img/favicon.png"

const TripDetailsPage = () => {
    useProtectedPage();
    const history = useHistory();
    const params = useParams();
    const [trip, setTrip] = useState({});


    useEffect(() => {
        getTripDetail(params.id);
    }, [params.id]);

    console.log(params.id)

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
    console.log(trip.id)

    const aproveCandidate = (candidateId) => {
        const token = window.localStorage.getItem("token");
        const body = { approve: true };
        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maduauler-cruz/trips/${params.id}/candidates/${candidateId}/decide`,
                body,
                {
                    headers: {
                        auth: token,
                    },
                }
            )
            .then((res) => {
                alert(`${candidateId} approved`);
                getTripDetail();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const reproveCandidate = (candidateId) => {
        const token = window.localStorage.getItem("token");
        const body = { approve: false };
        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maduauler-cruz/trips/${params.id}/candidates/${candidateId}/decide`,
                body,
                {
                    headers: {
                        auth: token,
                    },
                }
            )
            .then((res) => {
                alert(`${candidateId} reproved`);
                getTripDetail();
            })
            .catch((error) => {
                console.log(error);
            });
    };

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

                    <h1>Trip Details</h1><Buttons onClick={logout}>Logout</Buttons>
                    <Trips>
                        <h2>{trip.name}</h2>
                        <p>{trip.date}</p>
                        <p>{trip.description}</p>


                        {trip.candidates &&
                            trip.candidates.map((candidate) => {
                                return (
                                    <div key={candidate.id}>
                                        <p>{candidate.name}</p>
                                        <p>{candidate.age}</p>
                                        <p>{candidate.country}</p>
                                        <p> {candidate.profession}</p>
                                        <p>{candidate.applicationText}</p>
                                        <Buttons onClick={() => aproveCandidate(candidate.id)}> Aprove</Buttons>
                                        <Buttons onClick={() => reproveCandidate(candidate.id)} >Reprove </Buttons>
                                    </div>
                                );
                            })}

                    </Trips>
                </TripContainer>
            </Banner>
        </>
    );
};

export default TripDetailsPage