import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import './styles.css';
import { TextInput, Checkbox, Button, Table, Preloader } from 'react-materialize';
import M from 'materialize-css';
import { Form, Spinner, Alert } from 'react-bootstrap';

import Header from '../Header';
import Footer from '../Footer';

export default class Painel extends Component {

    state = {
        inscritos: [],
        confirmados: [],

        spinner: false,
    }

    componentDidMount = () => {
        M.AutoInit();
        this.getInscritos();
        // this.verifyLocalStorage();
    }

    componentWillMount = async () => {
        let listatemp = [];
        await api.get('inscritos').then((inscricoes) => {
            inscricoes.data.map((inscricao) => {
                if (inscricao.confirmado) listatemp.push(inscricao);
            })
        }).then(() => {
            this.setState({ confirmados: listatemp });
            console.log('inscritos willmount', this.state);
        })
    }

    getInscritos = async () => {
        let listatemp = [];
        this.setState({ spinner: true })
        await api.get('inscritos').then((inscricoes) => {
            inscricoes.data.map((inscricao) => {
                if (inscricao.confirmado) listatemp.push(inscricao);
            })
            this.setState({ inscritos: inscricoes.data });
        }).then(() => {
            this.setState({ spinner: false, confirmados: listatemp });
            console.log('inscritos', this.state);
        })
    }

    confirmaPagamento = async (inscrito) => {
        console.log('inscrito', inscrito);
        await api.put(`inscrito/confirmacao/${inscrito._id}`).then((res) => {
            console.log('return inscrito ', res.data);
            this.componentWillMount();
        });
    }

    render() {
        return (
            <div className="main-container">
                <Header />
                <div className="container">
                    <div className="main">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>Inscritos</h4>
                            </div>
                            <div className="col-md-3">
                                <div className="row card-page">
                                    <div className="col-2"><i className="material-icons inscritos">people_outline</i></div>
                                    <div className="col-10 text-left label-card"><strong>{this.state.inscritos && this.state.inscritos.length}</strong> <label>Inscritos</label> </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="col-md-3">
                                <div className="row card-page">
                                    <div className="col-2"><i className="material-icons confirmados">people_outline</i></div>
                                    <div className="col-10 text-left"><strong>{this.state.confirmados && this.state.confirmados.length}</strong> <label>Confirmados</label> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row body-overflow">
                            <div className="col-12">
                                <div className="row line-spinner " style={{ 'display': this.state.spinner ? '' : 'none' }}>
                                    <div className="col text-center">
                                        <Preloader size="big" />
                                    </div>
                                </div>
                                <Table style={{ 'display': !this.state.spinner ? '' : 'none' }}>
                                    <thead>
                                        <tr>
                                            <th data-field="id">Nome</th>
                                            <th data-field="name">E-mail</th>
                                            <th className="td-center" data-field="price">Pagamento</th>
                                            <th className="td-center" data-field="price">Confirmação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.inscritos && this.state.inscritos.map((inscrito) => {
                                            return (
                                                <tr key={inscrito._id}>
                                                    <td className="td-inscrito">{inscrito.nome} <br />
                                                        <label>há {
                                                            distanceInWords(inscrito.createdAt, new Date(), {
                                                                locale: pt
                                                            })}
                                                        </label>
                                                    </td>
                                                    <td>{inscrito.email}</td>
                                                    <td className="td-center">{inscrito.pagamento}</td>
                                                    <td className="td-center">
                                                        <Checkbox value='' label='' checked={inscrito.confirmado} onChange={() => this.confirmaPagamento(inscrito)} />
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}
