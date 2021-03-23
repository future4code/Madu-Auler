import React from "react";
import axios from "axios";
import styled from "styled-components";


export default class Cadastro extends React.Component {
    state = {
        infos: [],
        inputNameValue: "",
        inputEmailValue: ""
    };

    componentDidMount() {
        this.getAllUsers();
    }

    handleInputNameChange = (e) => {
        this.setState({ inputNameValue: e.target.value });
    };
    handleInputEmailChange = (e) => {
        this.setState({ inputEmailValue: e.target.value });
    };

    getAllUsers = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "maria-eduarda-auler-cruz"
                    }
                }
            )
            .then((res) => {
                this.setState({ infos: res.data })

            })
            .catch((err) => {
                alert("ocorreu um erro")
            });
    };

    createUser = () => {
        const body = {
            name: this.state.inputNameValue,
            email: this.state.inputEmailValue
        };
        axios
            .post(
                " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                {
                    headers: {
                        Authorization: "maria-eduarda-auler-cruz"
                    }
                }
            )
            .then((res) => {
                this.setState({ inputNameValue: '' })
                this.setState({ inputEmailValue: '' })
                this.getAllUsers()
            })
            .catch((err) => {
                this.setState({ inputNameValue: '' })
                this.setState({ inputEmailValue: '' })
                console.log(err.response.data);

            });
    };

    render() {
        const infosList = this.state.infos.map((info) => (
            <li key={info.id}>{info.name}</li>
        ));
        return (
            <div className="App">
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
                <button onClick={this.createUser}> Salvar </button>
                {this.state.infos.length > 0 ? (
                    <ul>{this.props.infosList}</ul>

                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        );
    }
}

// <ul>{this.props.infosList}</ul>