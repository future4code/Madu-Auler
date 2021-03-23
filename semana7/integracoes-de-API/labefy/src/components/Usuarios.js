import React from "react";
import axios from "axios";
import styled from "styled-components"
import Cadastro from "./Cadastro"

export default class Usuarios extends React.Component {
    render() {
        return (
            <div className="App">
                <p>Nomes</p>
                {this.state.playlists.length > 0 ? (
                    <ul>{infosList}</ul>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        );
    }
}