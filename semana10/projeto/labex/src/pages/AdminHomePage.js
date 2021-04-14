import React from "react";
import { useHistory } from "react-router-dom";
import { goToCreateTripPage, goToTripDetailsPage, goToHomePage, goToLoginPage, goToListTripsPage } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TextBox, HeadingMainPrimary, HeadingPrimary, HeadingPrimarySub } from "./styled-components"
import logo from "../img/favicon.png"

const AdminHomePage = () => {
    const history = useHistory()
    useProtectedPage();

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
                        <h1>AdminHomePage</h1>
                        <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
                        <button onClick={() => goToTripDetailsPage(history)}>Detalhes da Viagem</button>
                    </HeadingPrimary>

                </TextBox>
            </Banner>

        </>
    );
};

export default AdminHomePage