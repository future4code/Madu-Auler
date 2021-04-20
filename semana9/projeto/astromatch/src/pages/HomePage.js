
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'



const DivMain = styled.div`
  width: 400px;
 height:500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 7px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px;
 
`;

const DivImg = styled.div`
flex:wrap;
`
const DivButton = styled.div`
text-align:center;
`

const Img = styled.img`
width: 400px;
height: 350px;
text-align:center;
`

const Titulo = styled.h1`
text-align:center;
`
const urlBase =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-eduarda-auler-cruz/";

const HomePage = () => {
    const [allProfiles, setAllProfiles] = useState({});
    const [matches, setMatches] = useState([])

    // Pega todos os profiles do Banco de dados

    useEffect(() => {
        getProfileToChoose();
    }, []);


    const getProfileToChoose = () => {

        axios
            .get(`${urlBase}person`)
            .then((response) => {
                setAllProfiles(response.data.profile);

            })
            .catch((err) => {
                console.log(err);

            });

    };

    //Função de escolher profile, match or don't.

    const choosePersonLike = (boolean) => {

        const body = {
            id: allProfiles.id,
            choice: true
        };
        axios
            .post(`${urlBase}choose-person`, body)
            .then(() => {
                getProfileToChoose();
                console.log('funcionou')

            })
            .catch((err) => {
                console.log(err);
            });
    };

    const choosePersonDeslike = (boolean) => {

        const body = {
            id: allProfiles.id,
            choice: false
        };
        axios
            .post(`${urlBase}choose-person`, body)
            .then(() => {
                getProfileToChoose();
                console.log('funcionou')

            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (


        <DivMain>
            <Titulo>{allProfiles.name}, {allProfiles.age}</Titulo>
            <DivImg><Img src={allProfiles.photo}></Img></DivImg>
            <DivButton><button onClick={choosePersonLike}>S2</button><button onClick={choosePersonDeslike}>X</button></DivButton>
            <Link to='/matches'><button>Matches</button></Link>
        </DivMain >


    );
}

export default HomePage;