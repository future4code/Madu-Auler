
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
  displa:flex;
 
`;

const Img = styled.img`
width: 50px;
height: 50px;
text-align:center;
`


const urlBase =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-eduarda-auler-cruz/";

const Matches = () => {
    const [matches, setMatches] = useState([])

    // Pega todos os profiles do Banco de dados



    useEffect(() => {
        getMatches();
    }, []);

    useEffect(() => {
        getMatches()
    }, [matches])



    //Renderiza as telas, entre a tela inical para matchs.

    const getMatches = () => {
        axios
            .get(`${urlBase}matches`)
            .then(response => {
                setMatches(response.data.matches);

            })
            .catch(err => {
                console.log(err);
            });
    }

    const clearMatches = (id) => {
        axios
            .put(`${urlBase}clear`)
            .then(() => {
                getMatches();
                window.alert("Matchs deletados com sucesso!");
            })
            .catch(err => {
                console.log(err);
            });
    }

    const seeAllmatches = matches.map((match) => {

        return <div key={match.id}>
            <Img src={match.photo} />
            <p>{match.name}</p>
        </div>;

    })


    return (
        <DivMain>
            <div>
                {seeAllmatches}
            </div>
            <div>
                <Link to="/"> <button onClick={clearMatches}>Clean</button></Link>
            </div>
        </DivMain >


    );
}

export default Matches;