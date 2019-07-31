import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import './styles.css';
import { Checkbox, Table, Preloader, Modal } from 'react-materialize';
import M from 'materialize-css';
import { ModalBody } from 'react-bootstrap';

import Header from '../Header';
import Footer from '../Footer';

export default class Painel extends Component {
    state = {
        inscritos: [],
        confirmados: [],
        inscritoModal: '',

        spinner: false,
        show: false
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
            console.log('State =>', this.state);

        })
    }

    confirmaPagamento = async (inscrito) => {
        await api.put(`inscrito/confirmacao/${inscrito._id}`).then((res) => {
            console.log('return inscrito ', res.data);
            this.componentWillMount();
        });
    }

    showModal = inscrito => {
        this.setState({ show: true, inscritoModal: inscrito })
    }

    hideModal = () => {
        this.setState({ show: false, inscritoModal: '' })
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
                                            <th data-field="name">Contato</th>
                                            <th className="td-center" data-field="price">Pagamento</th>
                                            <th className="td-center" data-field="price">Confirmação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.inscritos && this.state.inscritos.map((inscrito) => {
                                            return (
                                                <tr key={inscrito._id}>
                                                    <td className="td-inscrito" onClick={() => this.showModal(inscrito)}><h6>{inscrito.nome}</h6>
                                                        <label>há {
                                                            distanceInWords(inscrito.createdAt, new Date(), {
                                                                locale: pt
                                                            })}
                                                        </label>
                                                    </td>
                                                    <td>
                                                        {inscrito.email}<br />
                                                        {inscrito.telefone}
                                                    </td>
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
                <Modal bottomSheet open={this.state.show} actions={() => this.hideModal()}>
                    <ModalBody>
                        <div className="row">
                            <div className="col-12">
                                <h6><strong>{this.state.inscritoModal.nome}, {this.state.inscritoModal.idade} anos </strong></h6>
                                <h6>Pastoral: <strong>{this.state.inscritoModal.funcao}</strong> em <strong>{this.state.inscritoModal.comunidade}</strong></h6>
                            </div>
                            <div className="col-md-6">
                                <label>Contato:</label><br />
                                <h6>Telefone: {this.state.inscritoModal.telefone}, e-mail: {this.state.inscritoModal.email}</h6>
                            </div>
                            <div className="col-md-6">
                                <label>Endereço:</label><br />
                                <h6>{this.state.inscritoModal.rua}, {this.state.inscritoModal.numero} - {this.state.inscritoModal.cidade}, {this.state.inscritoModal.estado}</h6>
                            </div>
                            <div className="col-md-6">
                                <label>Restrição:</label><br />
                                <h6>{this.state.inscritoModal.restricao}</h6>
                            </div>
                            <div className="col-md-6">
                                <label>Motivo da participação:</label><br />
                                <h6>{this.state.inscritoModal.motivo}</h6>
                            </div>
                        </div>
                    </ModalBody>
                    <div className="row">
                        <div className="col-12 text-right close-modal">
                            <a onClick={() => { this.hideModal() }}>Fechar</a>
                        </div>
                    </div>
                </Modal>
                <Footer />
            </div>
        );
    }
}
