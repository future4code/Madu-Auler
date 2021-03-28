import './AppStyledComponents.js';
import React from 'react';
import AddPlayList from './components/AddPlaylist'
import PlaylistList from './components/PlaylistList'
import styled from 'styled-components'
import { MainContainer, Header, LittleContainer, Logo, LogoImg, Button } from './AppStyledComponents'
import logo from './img/spotify.png'




export default class App extends React.Component {

  state = {
    page: "addPlaylist"
  }

  changePage = () => {
    if (this.state.page === "addPlaylist") {
      this.setState({ page: "playlistList" })
    } else if (this.state.page === "playlistList") {
      this.setState({ page: "addPlaylist" })
    }
  }

  renderPage = () => {
    switch (this.state.page) {
      case "addPlaylist":
        return <AddPlayList />
      case "playlistList":
        return <PlaylistList />
      default:
        <div>Página nao existe!</div>
    }
  }

  render() {

    return (
      <MainContainer>
        <Header>
          <Logo><LogoImg src={logo}></LogoImg></Logo>
          <LittleContainer>
            <h1>Labefy</h1>
            <Button onClick={this.changePage}>Trocar de página</Button>
            {this.renderPage()}
          </LittleContainer>
        </Header>
      </MainContainer>

    )
  }

}
