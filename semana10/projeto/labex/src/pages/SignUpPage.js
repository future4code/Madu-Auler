import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToHomePage, goToListTripsPage } from "../routes/coordinator";
import { Header, Container, Banner, Logo, Logobox, LogoButton, ButtonHeader, TextBox, HeadingMainPrimary, HeadingPrimary, HeadingPrimarySub } from "./styled-components"
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
                        <div><ButtonHeader onClick={() => goToLoginPage(history)}>Area Administrativa</ButtonHeader></div>
                        <LogoButton onClick={() => goToHomePage(history)}><Logobox><Logo src={logo}></Logo></Logobox></LogoButton>
                        <div><ButtonHeader onClick={() => goToListTripsPage(history)}>Lista de Viagens</ButtonHeader></div>
                    </Container>
                </Header>
                <TextBox>
                    <HeadingPrimary>
                        <h1>Sign Up</h1>
                        <input value={email} onChange={handleEmail} placeholder="E-mail" />
                        <input value={password} onChange={handlePassword} placeholder="Senha" />
                        <button onClick={signUp} >Fazer login</button>
                        <button onClick={() => goToLoginPage(history)}>Voltar para Login</button>
                    </HeadingPrimary>

                </TextBox>
            </Banner>

        </>
    );
};

export default SignUpPage