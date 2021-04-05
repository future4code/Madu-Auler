import './App.css';
import React from "react";
import axios from "axios";
import styled from "styled-components"
import Cadastro from "./components/Cadastro"
import Usuarios from "./components/Usuarios"
import Detalhe from "./components/Detalhe"
import { baseUrl, axiosConfig } from "./components/parametros";


export default class App extends React.Component {

  state = {
    page: "cadastro"
  };

  goToCreatePage = () => {
    this.setState({ page: "cadastro" })
  }

  goToListPage = () => {
    this.setState({ page: "usuarios" })
  }

  getUserById = (user) => {
    axios
      .get(baseUrl, axiosConfig)
      .then((res) => {
        this.setState({ users: res.data })
        console.log("Get User", res)
        this.setState({ page: "detalhe" })
      })
      .catch((err) => {
        console.log("failed", err)
      })
  }

  render() {
    const renderWindow = () => {
      if (this.state.page === "cadastro") {
        return <Cadastro changepage={this.goToListPage} />
      } else if (this.state.page === "usuarios") {
        return (
          <Usuarios
            goback={this.goToCreatePage}
            getdetails={this.getUserById}
          />
        )
      } else if (this.state.page === "detalhe") {
        return (
          <Detalhe goback={this.goToListPage} user={this.state.users} />
        )
      }
    }
    return <div className="App">{renderWindow()}</div>
  }

}

