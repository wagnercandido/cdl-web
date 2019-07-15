import React, { Component } from 'react';

import { TextInput, Textarea, Button } from 'react-materialize';
import M from 'materialize-css';
import { Form, Spinner } from 'react-bootstrap';

import './styles.css';
import api from '../../services/api';
import Toast from '../../services/toast';

export default class Inscricao extends Component {

    state = {
        nome: '',
        idade: '',
        telefone: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        restricao: '',
        comunidade: '',
        funcao: '',
        motivo: '',

        loadding: false,
        alerts: false,
        show: false

    }

    componentDidMount() {
        M.AutoInit();
    }

    estados = [
        { value: 'AL' }, { value: 'AP' }, { value: 'AM' }, { value: 'BA' },
        { value: 'CE' }, { value: 'DF' }, { value: 'ES' }, { value: 'GO' },
        { value: 'MA' }, { value: 'MT' }, { value: 'MS' }, { value: 'MG' },
        { value: 'PA' }, { value: 'PB' }, { value: 'PR' }, { value: 'PE' },
        { value: 'PI' }, { value: 'RJ' }, { value: 'RN' }, { value: 'RS' },
        { value: 'RO' }, { value: 'RR' }, { value: 'SC' }, { value: 'SP' },
        { value: 'SE' }, { value: 'TO' },
    ];

    returnestado = (event) => {
        this.setState({ estado: event.target.value })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    showAlerts = (teste) => {
        return this.setState({ alerts: teste ? true : false })
    };

    realizarInscricao = async () => {
        this.showAlerts(false);

        if (this.state.nome.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.telefone.trim().length === 0) {
            this.showAlerts(true);
        } else {
            this.setState({ loadding: true });
            const inscricao = await api.post('inscricao', {
                nome: this.state.nome,
                idade: this.state.idade,
                telefone: this.state.telefone,
                rua: this.state.rua,
                numero: this.state.numero,
                bairro: this.state.bairro,
                cidade: this.state.cidade,
                estado: this.state.estado,
                restricao: this.state.restricao,
                comunidade: this.state.comunidade,
                funcao: this.state.funcao,
                motivo: this.state.motivo,
            })

            if (inscricao.data) {
                this.setState({ loadding: false });
                this.setState({ show: true });
                setTimeout(() => {
                    this.setState({ show: false });
                }, 3000);
            } else {
                this.setState({ loadding: false });
                console.log('Erro', inscricao);
            }
        }


    }

    render() {
        return (
            <div className="container">
                <div style={{ 'display': this.state.show ? '' : 'none' }}>
                    <Toast tipo="success" mensagem="Inscrição Realizada!" />
                </div>
                <div className="row">
                    <h5>Inscrição CDL</h5>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <label>Dados do Cursista</label>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                <TextInput label="Nome completo *"
                                    name="nome" onChange={this.handleChange} value={this.state.nome}
                                />
                            </div>
                            <div className="col-md-3">
                                <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                <TextInput label="Idade"
                                    name="idade" onChange={this.handleChange} value={this.state.idade}
                                />
                            </div>
                            <div className="col-md-4">
                                <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                <TextInput label="Telefone"
                                    name="telefone" onChange={this.handleChange} value={this.state.telefone}
                                />
                            </div>
                        </div>
                        <label>Endereço</label>
                        <div className="row">
                            <div className="col-md-9">
                                <TextInput label="Rua"
                                    name="rua" onChange={this.handleChange} value={this.state.rua}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextInput label="Nº"
                                    name="numero" onChange={this.handleChange} value={this.state.numero}
                                />
                            </div>
                            <div className="col-md-4">
                                <TextInput label="Bairro"
                                    name="bairro" onChange={this.handleChange} value={this.state.bairro}
                                />
                            </div>
                            <div className="col-md-5">
                                <TextInput label="Cidade"
                                    name="cidade" onChange={this.handleChange} value={this.state.cidade}
                                />
                            </div>
                            <div className="col-md-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control as="select" onChange={this.returnestado}>
                                    <option value=""></option>
                                    {this.estados && this.estados.map(estado => (
                                        <option key={estado.value} value={estado.value}>{estado.value}</option>
                                    ))}
                                </Form.Control>
                            </div>
                        </div>
                        <label>Restrições do Cursista</label>
                        <div className="row">
                            <div className="col-md-12">
                                <Textarea placeholder="Restrições com comida, alergias, etc" data-length={120}
                                    name="restricao" onChange={this.handleChange} value={this.state.restricao}
                                />
                            </div>
                        </div>
                        <label>Questionário Rápido</label>
                        <div className="row">
                            <div className="col-md-12">
                                <TextInput label="Comunidade que participa"
                                    name="comunidade" onChange={this.handleChange} value={this.state.comunidade}
                                />
                            </div>
                            <div className="col-md-12">
                                <TextInput label="Função que exerce na comunidade"
                                    name="funcao" onChange={this.handleChange} value={this.state.funcao}
                                />
                            </div>
                            <div className="col-md-12">
                                <TextInput label="Porque você quer participar do CDL 2019?"
                                    name="motivo" onChange={this.handleChange} value={this.state.motivo}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-right" style={{ 'display': !this.state.loadding ? '' : 'none' }}>
                                <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none', 'margin-bottom': '10px' }}><small>* Verifique os campos obrigatórios</small></div>
                                <Button onClick={this.realizarInscricao} waves="light">REALIZAR INSCRIÇÃO</Button>
                            </div>
                            <div className="col-lg-12 text-right" style={{ 'display': this.state.loadding ? '' : 'none' }}>
                                <Spinner animation="border" variant="success" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 colLateral d-flex justify-content-center align-items-center">

                        <h4>Curso de Dinâmica para Líderes 2019</h4>
                        <h6>Faça sua inscrição e aguarde nosso contato.
                            <br />
                            Boa sorte!</h6>
                    </div>
                </div>
            </div>
        );
    }
}
