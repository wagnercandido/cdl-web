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
        this.clearLocalStorage();
    }

    clearLocalStorage = () => {
        localStorage.removeItem('data');
        localStorage.removeItem('data_id');
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    efetuarLogin = async () => {
        this.setState({ error: '' })
        let senha = this.state.senha;
        senha = btoa(senha);

        await api.post(`login/`, {
            usuario: this.state.usuario,
            senha: senha
        }).then((response) => {
            if (response.data.status === 200) {
                localStorage.setItem('data', response.data.user);
                localStorage.setItem('data_id', response.data._id);
                this.props.history.push('/painel');
            } else {
                this.setState({ error: response.data.response });
            }
        })
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