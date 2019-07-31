import React, { Component } from 'react';

import { TextInput, Checkbox, Button } from 'react-materialize';
import M from 'materialize-css';
import { Form, Spinner, Alert } from 'react-bootstrap';

import './styles.css';
import api from '../../services/api';

import Logo from '../../assets/logo-cdl.png';

import Footer from '../Footer';

export default class Inscricao extends Component {

    state = {
        nome: '',
        idade: '',
        telefone: '',
        email: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        restricao: '',
        comunidade: '',
        funcao: '',
        motivo: '',
        pagamento: '',
        
        aceito: false,

        loadding: false,
        alerts: false,

        credito: false,
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

    returnpagamento = (event) => {
        this.setState({ pagamento: event.target.value })
        setTimeout(() => {
            this.state.pagamento.indexOf("credito") != -1 ? this.setState({credito:true}) : this.setState({credito:false});
        }, 1000);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleAceitar = event => {
        let aceitar = document.getElementById('checkbox').checked;
        setTimeout(() => {
            this.setState({aceito: aceitar ? true : false})
        }, 1000);
    }

    showAlerts = (teste) => {
        return this.setState({ alerts: teste ? true : false })
    };

    realizarInscricao = async () => {
        this.showAlerts(false);

        if (this.state.nome.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.idade.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.telefone.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.email.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.rua.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.numero.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.bairro.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.cidade.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.estado.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.restricao.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.comunidade.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.funcao.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.motivo.trim().length === 0) {
            this.showAlerts(true);
        } else if (this.state.pagamento.trim().length === 0) {
            this.showAlerts(true);
        } else if (!this.state.aceito) {
            this.showAlerts(true);
        } else {
            this.setState({ loadding: true });
            console.log('state', this.state);
            
            const inscricao = await api.post('inscricao', {
                nome: this.state.nome,
                idade: this.state.idade,
                telefone: this.state.telefone,
                email: this.state.email,
                rua: this.state.rua,
                numero: this.state.numero,
                bairro: this.state.bairro,
                cidade: this.state.cidade,
                estado: this.state.estado,
                restricao: this.state.restricao,
                comunidade: this.state.comunidade,
                funcao: this.state.funcao,
                motivo: this.state.motivo,
                pagamento: this.state.pagamento,
                confirmado: false
            })

            if (inscricao.data) {
                this.setState({ loadding: false });
                let inscrito = inscricao.data._id;
                this.props.history.push(`/confirmacao/${inscrito}`);
            } else {
                this.setState({ loadding: false });
                alert('Não foi possível processar.\nTente novamente!');
            }
        }


    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 colLateral d-flex justify-content-center align-items-center">
                            <img src={Logo} />
                            <h4>Curso de Dinâmica para Líderes 2019</h4>
                            <h6>Faça sua inscrição e aguarde nosso contato.
                            <br />
                                Boa sorte!</h6>
                            <label for="nome" className="isMobile"><i className="material-icons md-icons">keyboard_arrow_down</i></label>

                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <h5>Seja bem vindo!</h5>
                            </div>
                            <div className="row">
                                <h6>Realize sua inscrição, preenchendo o formulário abaixo</h6>
                            </div>
                            <label>Dados do Cursista</label>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Nome completo *" id="nome"
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
                                <div className="col-md-8">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="E-mail" type="email"
                                        name="email" onChange={this.handleChange} value={this.state.email}
                                    />
                                </div>
                            </div>
                            <label>Endereço</label>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Rua"
                                        name="rua" onChange={this.handleChange} value={this.state.rua}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Nº"
                                        name="numero" onChange={this.handleChange} value={this.state.numero}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Bairro"
                                        name="bairro" onChange={this.handleChange} value={this.state.bairro}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Cidade"
                                        name="cidade" onChange={this.handleChange} value={this.state.cidade}
                                    />
                                </div>
                                <div className="col-md-3">
                                <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control as="select" className="selectEstado" onChange={this.returnestado}>
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
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Restrição física ou alimentar?"
                                        name="restricao" onChange={this.handleChange} value={this.state.restricao}
                                    />
                                </div>
                            </div>
                            <label>Questionário Rápido</label>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Comunidade que participa"
                                        name="comunidade" onChange={this.handleChange} value={this.state.comunidade}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Função que exerce na comunidade"
                                        name="funcao" onChange={this.handleChange} value={this.state.funcao}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <TextInput label="Porque você quer participar do CDL 2019?"
                                        name="motivo" onChange={this.handleChange} value={this.state.motivo}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Campo obrigatório</small></div>
                                    <Form.Label>Forma de Pagamento</Form.Label>
                                    <Form.Control as="select" onChange={this.returnpagamento}>
                                        <option value=""></option>
                                        <option value="debito">Cartão de débito</option>
                                        <option value="credito">Cartão de Crédito - direto</option>
                                        <option value="credito2x">Cartão de Crédito - 2x</option>
                                        <option value="credito3x">Cartão de Crédito - 3x</option>
                                        {/* <option value="dinheiro">Dinheiro</option> */}
                                        <option value="deposito">Depósito ou transferência bancária</option>
                                    </Form.Control>
                                </div>
                                <div className="col-md-6">
                                    <Alert variant="secondary" style={{'display': this.state.credito ? '' : 'none'}}>
                                        <label>
                                            Você receberá um link contendo informações do pagamento.
                                        </label>
                                    </Alert>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <Checkbox id="checkbox" value={this.state.aceito} onChange={this.handleAceitar}
                                    label="Assumo a responsabilidade de cuidar dos meus pertences durante todo o curso,
                                    ficando ciente de que eventuais perdas não serão de responsabilidade da organização. *" />
                                    <div className="alerts" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Necessário marcar o campo acima</small></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-right" style={{ 'display': !this.state.loadding ? '' : 'none' }}>
                                    <br /><br />
                                    <div className="alerts marginCorrection" style={{ 'display': this.state.alerts ? '' : 'none' }}><small>* Verifique os campos obrigatórios</small></div>
                                    <Button onClick={this.realizarInscricao} waves="light">REALIZAR INSCRIÇÃO</Button>
                                    <br /><br />
                                </div>
                                <div className="col-lg-12 text-right" style={{ 'display': this.state.loadding ? '' : 'none' }}>
                                    <Spinner animation="border" variant="success" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
