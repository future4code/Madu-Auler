import React from "react";
import axios from "axios";
import styled from "styled-components"
import { baseUrl, axiosConfig } from "./parametros";
import Detalhe from "./Detalhe"
import App from "../App"


export default class Usuarios extends React.Component {

    state = {
        users: [],
    }

    componentDidMount() {
        this.getAllUsers()
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

    deleteUser = (id) => {
        if (window.confirm("Tem certeza de que deseja deletar?")) {
            axios
                .delete(`${baseUrl}/${id}`, axiosConfig)
                .then((res) => {
                    this.getAllUsers();
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.goback}> Voltar </button>
                <h2>Lista de Usuários</h2>
                {this.state.users.map((user) => {
                    return (

                        <div>
                            <p>{user.name}</p>
                            <button onClick={() => this.deleteUser(user.id)}>Deletar Usuário</button>
                            <button onClick={() => this.props.getdetails(user)}>Editar</button>



                        </div>

                    )
                })}
            </div>
        )
    }

}
