import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { goToSignUpPage, goToLoginPage, goToListTripsPage, goToHomePage } from "../routes/coordinator";
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TextBox, Inputs, HeadingPrimary, Buttons } from "./styled-components"
import logo from "../img/favicon.png"


const LoginPage = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = () => {
        const body = {
            email: email,
            password: password
        };

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maduauler-cruz/login",
                body
            )
            .then((res) => {
                console.log(res.data);
                window.localStorage.setItem('token', res.data.token)
                history.push("/admin/trips/list")
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
                        <h1>Login</h1>
                        <Inputs value={email} onChange={handleEmail} placeholder="E-mail" />
                        <Inputs value={password} onChange={handlePassword} placeholder="Senha" />
                        <Buttons onClick={login}>Login</Buttons>
                        <Buttons onClick={() => goToSignUpPage(history)}>Sign Up</Buttons>
                    </HeadingPrimary>

                </TextBox>
            </Banner>

        </>
    );
};

export default LoginPage;