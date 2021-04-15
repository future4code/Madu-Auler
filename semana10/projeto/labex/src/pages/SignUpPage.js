import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToHomePage, goToListTripsPage } from "../routes/coordinator";
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TextBox, HeadingPrimary, Buttons, Inputs } from "./styled-components"
import logo from "../img/favicon.png"

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const signUp = () => {
        const body = {
            email: email,
            password: password
        };

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-eduarda-auler-cruz/signup",
                body
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
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
                <TextBox>
                    <HeadingPrimary>
                        <h1>Sign Up</h1>
                        <Inputs value={email} onChange={handleEmail} placeholder="E-mail" />
                        <Inputs value={password} onChange={handlePassword} placeholder="Senha" />
                        <Buttons onClick={signUp} >Fazer login</Buttons>
                        <Buttons onClick={() => goToLoginPage(history)}>Voltar para Login</Buttons>
                    </HeadingPrimary>

                </TextBox>
            </Banner>

        </>
    );
};

export default SignUpPage