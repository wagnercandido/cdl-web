import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
import M from 'materialize-css';
import { TextInput, Button } from 'react-materialize';

import Logo from '../../assets/logo-cdl.png'

export default class Login extends Component {

    state = {
        usuario: '',
        senha: '',
        error: '',
        pressSenha: '',
        id: '',
    }

    componentDidMount() {
        M.AutoInit();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    efetuarLogin = async () => {
        await api.post(`login/`,{
            usuario: this.state.usuario,
            senha: atob(this.state.senha)
        }).then((response)=>{
            console.log('Response login', response.data);
        })
        // this.setState({ senha: atob(this.state.senha) });
        this.props.history.push('/painel')

    };

    render() {
        return (

            <div id="main-container">
                <div className="classForm">
                    <h3>
                        <label><img src={Logo} /></label>
                    </h3>
                    <TextInput label="usuário" id="usuario"
                        name="usuario" onChange={this.handleChange} value={this.state.usuario}
                    />
                    <TextInput label="senha" id="senha" password
                        name="senha" onChange={this.handleChange} value={this.state.senha}
                    />

                    <small className="error">{this.state.error}</small>
                    <Button className="btnEntrar" onClick={this.efetuarLogin}>Entrar</Button>

                </div>
            </div>
        )
    }
}