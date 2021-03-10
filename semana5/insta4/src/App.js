import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import mulher from './img/m.jpg'
import homem from './img/h.png'
import paisagem1 from './img/p1.jpg'
import paisagem2 from './img/p2.jpg'


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'adri'}
          fotoUsuario={mulher}
          fotoPost={paisagem1}
        />

        <Post
          nomeUsuario={'janni'}
          fotoUsuario={homem}
          fotoPost={paisagem2}
        />
      </div>
    );
  }
}

export default App;
