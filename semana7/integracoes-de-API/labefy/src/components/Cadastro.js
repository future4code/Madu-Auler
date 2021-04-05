import React from "react";
import axios from "axios";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "./parametros";
import App from "../App"



export default class Cadastro extends React.Component {
    state = {
        inputNameValue: "",
        inputEmailValue: ""
    };


    handleInputNameChange = (e) => {
        this.setState({ inputNameValue: e.target.value });
    };
    handleInputEmailChange = (e) => {
        this.setState({ inputEmailValue: e.target.value });
    };

    createUser = () => {
        const body = {
            name: this.state.inputNameValue,
            email: this.state.inputEmailValue
        };

        axios
            .post(baseUrl, body, axiosConfig)
            .then((res) => {
                console.log(res);
                alert("O usuário foi criado com sucesso!");
                this.setState({ inputNameValue: "", inputEmailValue: "" });
            })
            .catch((err) => {
                alert("Ocorreu um erro!");
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <h2>Criar Usuário</h2>
                <input
                    placeholder={"Name"}
                    value={this.state.inputNameValue}
                    onChange={this.handleInputNameChange}
                />
                <input
                    placeholder={"Email"}
                    value={this.state.inputEmailValue}
                    onChange={this.handleInputEmailChange}
                />
                <button onClick={this.props.changepage}> Salvar </button>
            </div>
        );
    }
}

// <ul>{this.props.infosList}</ul>