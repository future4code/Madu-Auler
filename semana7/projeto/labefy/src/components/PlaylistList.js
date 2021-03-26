import React from "react";
import axios from "axios";
import AddPlayList from './AddPlaylist'
import { axiosConfig, baseUrl } from "../parameters";

export default class PlaylistList extends React.Component {

    state = {
        playlists: [],
        page: "playlistList"
    }

    componentDidMount() {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {
        axios
            .get(baseUrl, axiosConfig)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                console.log(res.data.result.list)
            }).catch((err) => {
                console.log(err)
            })

    };

    deletePlaylist = (id) => {
        if (window.confirm(`Deseja mesmo deletar a playlist ?`)) {
            axios
                .delete(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, axiosConfig
                )
                .then((res) => {
                    this.getAllPlaylists();
                    alert("Deletada")
                    console.log(id)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    render() {
        const mapPlay = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar</button>
                    <hr />
                </div>
            );
        });

        return (
            <div>
                <h1>Playlists:</h1>
                {mapPlay}


            </div >
        )
    }
}