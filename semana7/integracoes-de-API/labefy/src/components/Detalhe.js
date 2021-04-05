import React from "react";
import axios from "axios";
import styled from "styled-components"
import { baseUrl, axiosConfig } from "./parametros";
import { deleteUser } from "./Usuarios"

export default class Usuarios extends React.Component {
    state = {
        users: [],
    }
    getAllUsers = () => {
        axios
            .get(baseUrl, axiosConfig)
            .then((res) => {
                this.setState({ users: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div><button onClick={this.props.goback}> Voltar </button><h1>DETALHE</h1>

                {this.state.users.map((user) => {
                    return (
                        <div >
                            <p>{user.name}</p>
                            <p>{user.email}</p>

                        </div>
                    )
                })}

            </div>
        )
    }

}