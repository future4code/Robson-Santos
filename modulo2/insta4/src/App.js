import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

class App extends React.Component {
  state = {
    usuarios: [{
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/190/150' 
    },
    {   
      nomeUsuario: 'maria',
      fotoUsuario: 'https://picsum.photos/51/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'diana',
      fotoUsuario: 'https://picsum.photos/52/50',
      fotoPost: 'https://picsum.photos/210/150'
    }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const Posts = [...this.state.usuarios, novoPost]

    this.setState({usuarios: Posts})
    this.setState({ valorInputNomeUsuario: ""})
    this.setState({ valorInputFotoUsuario: ""})
    this.setState({ valorInputFotoPost: ""})
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUser = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {
    const listaDeUsuarios = this.state.usuarios.map((post) => {
      return (
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
        />   
      );
    });

    return (
      <div>
        <Formulario>
          <input
            value = {this.state.valorInputNomeUsuario}
            onChange = {this.onChangeInputNome}
            placeholder = {"Nome de Usuário"}
          />
          <input
            value = {this.state.valorInputFotoUsuario}
            onChange = {this.onChangeInputFotoUser}
            placeholder = {"Foto de Perfil"}
          />
          <input
            value = {this.state.valorInputFotoPost}
            onChange = {this.onChangeInputFotoPost}
            placeholder = {"Foto para publicação"}
          />
          <button onClick = {this.adicionaPost}> Adicionar</button>
          </Formulario>
          <MainContainer>
            {listaDeUsuarios}        
          </MainContainer>
      </div>
    );
  }
}

export default App;
