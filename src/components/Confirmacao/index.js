import React, { Component } from 'react';

import './styles.css';

import Footer from '../Footer';
import api from '../../services/api';

export default class Confirmacao extends Component {

    state = {
        inscrito: ''
    }

    async componentDidMount() {
        let inscricao = this.props.match.params.id;
        const response = await api.get(`inscrito/${inscricao}`)
        inscricao = response.data;
        this.setState({ inscrito: inscricao });
    }

    handleName = (nome) => {
        if(nome){
            let name = nome.trim().split(" ");
            return name[0];
        }
    }

    render() {
        return (
            <div>
                <div className="main">
                    <div className="success-retorno">
                        <label><i className="material-icons md-icon">check</i></label>
                        <h1>Parabéns {this.state.inscrito && this.handleName(this.state.inscrito.nome)}!</h1>
                        <p>Sua inscrição foi concluída com sucesso!</p>
                        <br />
                        <a onClick={() => this.props.history.push('/inscricao')}>REALIZAR NOVA INSCRIÇÃO</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
