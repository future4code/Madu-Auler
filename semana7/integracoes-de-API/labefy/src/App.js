import './App.css';
import React from "react";
import axios from "axios";
import styled from "styled-components"
import Cadastro from "./components/Cadastro"
import Usuarios from "./components/Usuarios"


export default class App extends React.Component {

  state = {
    usersCreated: false,
  }

  createPage = () => {
    this.setState({ usersCreated: true })
  }
  listPage = () => {
    this.setState({ usersCreated: false })
  }
  render() {

    const renderWindow = () => {
      if (this.state.usersCreated) {
        return <Usuarios changepage={this.listPage} />
      } else {
        return <Cadastro changepage={this.createPage} />
      }
    }
    return (
      <div className="App">
        {renderWindow()}
      </div>
    );
  }
}

