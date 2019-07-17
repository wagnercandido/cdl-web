import React, { Component } from 'react';

import './styles.css';

import Footer from '../Footer';

export default class Confirmacao extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="success-retorno">
                        <label><i class="material-icons md-icon">check</i></label>
                        <h1>Parabéns!</h1>
                        <p>Sua inscrição foi concluída com sucesso!</p>
                        <br />
                        {/* <a onClick={this.props.history.push('/')}>REALIZAR NOVA INSCRIÇÃO</a> */}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
