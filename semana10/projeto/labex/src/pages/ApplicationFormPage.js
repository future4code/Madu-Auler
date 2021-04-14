import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { goToHomePage, goToLoginPage, goToListTripsPage } from "../routes/coordinator"
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TextBox, HeadingMainPrimary, HeadingPrimary, HeadingPrimarySub } from "./styled-components"
import logo from "../img/favicon.png"

const ApplicationFormPage = () => {
    const history = useHistory()


    return (
        <><Banner>
            <Header>
                <Container>
                    <div><ButtonHeader onClick={() => goToLoginPage(history)}>Area Administrativa</ButtonHeader></div>
                    <LogoButton onClick={() => goToHomePage(history)}><Logobox><Logo src={logo}></Logo></Logobox></LogoButton>
                    <div><ButtonHeader onClick={() => goToListTripsPage(history)}>Lista de Viagens</ButtonHeader></div>
                </Container>
            </Header>
            <TextBox>
                <HeadingPrimary>
                    <p>ApplicationFormPage</p>
                </HeadingPrimary>

            </TextBox>
        </Banner>


        </>
    );
};

export default ApplicationFormPage;
