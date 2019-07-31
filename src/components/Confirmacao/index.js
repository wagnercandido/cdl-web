import React, { Component } from 'react';

import './styles.css';

import Footer from '../Footer';
import api from '../../services/api';

class PagamentoComponent extends Component {
    render() {
        return (
            <div className="dados-deposito">
                <h6>Dados bancários para depósito ou transferência</h6>
                <label>Banco:</label> <label>Caixa Econômica</label><br />
                <label>Agência:</label> <label>0041</label><br />
                <label>Operação:</label> <label>013</label><br />
                <label>Conta Poupança:</label> <label>411045-0</label><br />
                <label>Titular:</label> <label>MARIA DO SOCORRO M DE LIMA</label>
            </div>
        );
    }
}

export default class Confirmacao extends Component {

    state = {
        inscrito: ''
    }

    async componentDidMount() {
        let inscricao = this.props.match.params.id;
        const response = await api.get(`inscrito/${inscricao}`)
        inscricao = response.data;
        this.setState({ inscrito: inscricao });
        console.log('====================================');
        console.log(inscricao);
        console.log('====================================');
    }

    handleName = (nome) => {
        if (nome) {
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
                        <div style={{ 'display': this.state.inscrito.pagamento === 'deposito' ? '' : 'none' }}>
                            <PagamentoComponent pagamento={this.state.inscrito.pagamento} />
                        </div>
                        <br />
                        <br />
                        <a onClick={() => this.props.history.push('/inscricao')}>REALIZAR NOVA INSCRIÇÃO</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
